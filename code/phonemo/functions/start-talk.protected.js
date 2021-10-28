const assets = Runtime.getAssets();
const { Data } = require(assets["/data.js"].path);

exports.handler = async (context, event, callback) => {
  const data = new Data(context);
  const client = context.getTwilioClient();
  const code = event.TalkCode;
  const talk = data.getTalkByCode(code);
  const speakerCallSids = [];
  console.log("Calling speakers...");
  let domainName = context.DOMAIN_NAME;
  if (domainName.startsWith("localhost")) {
    domainName = "f4c2-97-120-39-113.ngrok.io";
  }
  for (const speaker of talk.speakers) {
    const participant = await client
      .conferences(talk.code)
      .participants.create({
        to: speaker.phoneNumber,
        from: context.TWILIO_PHONE_NUMBER,
        label: speaker.name,
        beep: true,
        startConferenceOnEnter: true,
        conferenceStatusCallback: `https://${domainName}/status-handler`,
        conferenceStatusCallbackEvent: ["leave"],
      });
    speakerCallSids.push(participant.callSid);
  }

  const registrants = await data.getRegistrants(talk);
  console.log("Calling registrants...");
  let registrantPhoneNumbers = registrants.map((r) => r.phoneNumber);
  const registrantPhoneNumbersSet = new Set(registrantPhoneNumbers);
  registrantPhoneNumbers = [...registrantPhoneNumbersSet];

  const promises = registrantPhoneNumbers.map(async (registrantPhoneNumber) => {
    const participant = await client
      .conferences(talk.code)
      .participants.create({
        to: registrantPhoneNumber,
        from: context.TWILIO_PHONE_NUMBER,
        muted: true,
        beep: false,
        startConferenceOnEnter: false,
      });
    return participant.callSid;
  });

  const results = await Promise.allSettled(promises);
  const registrantCallSids = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  results
    .filter((result) => result.status === "rejected")
    .forEach((result) => console.error(result.reason));

  console.log(`
    Code: ${event.TalkCode}
    Speakers: ${speakerCallSids.length}
    Registrants: ${registrantCallSids.length}
    Failed registrant attempts: ${
      registrantPhoneNumbers.length - registrantCallSids.length
    }
  `);
  callback(null, {
    talkCode: event.TalkCode,
    speakerCallSids,
    registrantCallSids,
  });
};
