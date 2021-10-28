const assets = Runtime.getAssets();
const { Data } = require(assets["/data.js"].path);

exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.VoiceResponse();
  const data = new Data(context);
  const talk = data.getCurrentTalk();
  if (talk !== undefined) {
    twiml.dial().conference(
      {
        muted: false,
        beep: false,
        startConferenceOnEnter: false,
      },
      talk.code
    );
  } else {
    // TODO: Build a voice representation of upcoming talks
    twiml.say(
      "There is no talk currently. Send us a text for a schedule of upcoming talks"
    );
  }
  console.log(`TwiML is ${twiml}`);
  return callback(null, twiml);
};
