const assets = Runtime.getAssets();
const { Data } = require(assets["/data.js"].path);

exports.handler = async (context, event, callback) => {
  const data = new Data(context);
  const client = context.getTwilioClient();
  switch(event.StatusCallbackEvent) {
    case "participant-leave":
      const code = event.FriendlyName;
      const talk = data.getTalkByCode(code);
      console.log(`Sending text about ${talk.title}`);
      const call = await client.calls(event.CallSid).fetch();
      const attendeeNumber = call.direction === "outbound-api" ? call.to : call.from;
      const message = await client.messages.create({
        to: attendeeNumber,
        messagingServiceSid: context.MESSAGING_SERVICE_SID,
        body: `Thanks for attending ${talk.title}. 
        On a scale of 1 to 10, how likely are you to recommend PhoneMO to you friends or family`
      });
      break;
    default:
      console.log(`Unhandled event ${event.StatusCallbackEvent}`);
      break;
  }

};