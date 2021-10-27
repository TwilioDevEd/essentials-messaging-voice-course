# Twilio Essentials - Programmable Messaging and Programmable Voice

## Unit 1 - Introducing Twilio and Programmable Messaging

### Video 1 - Welcome

* 📽 [Introduction to APIs](https://www.youtube.com/watch?v=GZvSYJDk-us)

### Video 2 - Signing up

### Video 3 - What even is a message?

* 📚 [Message Resource API](https://www.twilio.com/docs/sms/api/message-resource)
* 🧰 [Message Segmenting Calculator](https://twiliodeved.github.io/message-segment-calculator/)
* 👀 [WhatsApp Business API](https://www.twilio.com/whatsapp)

### Video 4 - Send a text message

* 📚 [Twilio CLI](https://twil.io/cli)
* 🙋‍♂️ [Support - Adding a verified phone number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio)
* 📚 [Twilio CLI - JSON output format](https://www.twilio.com/docs/twilio-cli/general-usage#json-output-format)


### Video 5 - Receiving a message

* 🎮 [Play TwilioQuest](https://twilio.com/quest)
* 📚 [Twilio Webhooks](https://www.twilio.com/docs/usage/webhooks)
* 📽 [Understanding Webhooks - freeCodeCamp](https://www.youtube.com/watch?v=41NOoEz3Tzc)

### Video 6 - Responding dynamically

#### /auto-responder
```javascript
exports.handler = function(context, event, callback) {
  console.log(`Body was ${event.Body}`);
	const twiml = new Twilio.twiml.MessagingResponse();
  if (event.Body.toUpperCase() === "QUEST") {
    twiml.message("Discover your power to change the world with code! https://twilio.com/quest");
  } else {
    twiml.message(`I don't know what you mean by "${event.Body}". Did you mean QUEST?`);
  }
  console.log(`TwiML: ${twiml}`);
  return callback(null, twiml);
};
```

### Video 7 - Review + Practice

## Unit 2 - Programmable Voice

### Video 1 - Appreciating the Phone

### Video 2 - Receive a Call

### Video 3 - Gather Input

### Video 4 - Create an Outbound Call

### Video 5 - Review + Practice

## Unit 3 - All Together Now

### Video 1 - Project Introduction

### Video 2 - Use the Serverless Toolkit

### Video 3 - Create a Conference

### Video 4 - Use Private Data

### Video 5 - Allow for registration via SMS

### Video 6 - Call the registrants

### Video 7 - Deploy

### Video 8 - Send a follow-up survey

### Video 9 - Wrap-up
