# Twilio Essentials - Programmable Messaging and Programmable Voice

## Unit 1 - Introducing Twilio and Programmable Messaging

### Video 1 - Welcome

- 📽 [Introduction to APIs](https://www.youtube.com/watch?v=GZvSYJDk-us)

### Video 2 - Signing up

### Video 3 - What even is a message?

- 📚 [Message Resource API](https://www.twilio.com/docs/sms/api/message-resource)
- 🧰 [Message Segmenting Calculator](https://twiliodeved.github.io/message-segment-calculator/)
- 👀 [WhatsApp Business API](https://www.twilio.com/whatsapp)

### Video 4 - Send a text message

- 📚 [Twilio CLI](https://twil.io/cli)
- 🙋‍♂️ [Support - Adding a verified phone number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio)
- 📚 [Twilio CLI - JSON output format](https://www.twilio.com/docs/twilio-cli/general-usage#json-output-format)

### Video 5 - Receiving a message

- 📚 [`<Message>`](https://www.twilio.com/docs/messaging/twiml/message)
- 🎮 [Play TwilioQuest](https://twilio.com/quest)
- 📚 [Twilio Webhooks](https://www.twilio.com/docs/usage/webhooks)
- 📽 [Understanding Webhooks - freeCodeCamp](https://www.youtube.com/watch?v=41NOoEz3Tzc)

#### TwiML Bin: TwilioQuest

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Discover your power to change the world with code! https://twilio.com/quest</Message>
</Response>
```

### Video 6 - Responding dynamically

#### /auto-responder

```javascript
exports.handler = function (context, event, callback) {
  console.log(`Body was ${event.Body}`);
  const twiml = new Twilio.twiml.MessagingResponse();
  if (event.Body.toUpperCase() === "QUEST") {
    twiml.message(
      "Discover your power to change the world with code! https://twilio.com/quest"
    );
  } else {
    twiml.message(
      `I don't know what you mean by "${event.Body}". Did you mean QUEST?`
    );
  }
  console.log(`TwiML: ${twiml}`);
  return callback(null, twiml);
};
```

### Video 7 - Review + Practice

- 📚 [Helper Libraries](https://www.twilio.com/docs/libraries)
- 📚 [Messaging Services Best Practices at Scale](https://www.twilio.com/docs/messaging/guides/best-practices-at-scale)
- 🙋‍♂️ [Support - Adding a verified phone number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio)

#### Practice Programmable Messaging

Here are some practice and example applications for you to experiment with. Let us know how it's going [@TwilioDevs](https://twitter.com/TwilioDevs) or in the [community](https://community.twilio.com)

- 💡 Create an SMS auto-responder that shares a link to one of your favorite web applications
- 💡 Build a dynamic SMS based [magic 8-ball](https://en.wikipedia.org/wiki/Magic_8-Ball) app using Twilio Functions
- 🧪 [Build SMS Appointment Reminders](https://www.twilio.com/docs/sms/tutorials/appointment-reminders)
- 👩‍💻 [CodeExchange - SMS Forwarding](https://www.twilio.com/code-exchange/simple-sms-forwarding)
- 👩‍💻 [CodeExchange - Send browser based SMS notifications](https://www.twilio.com/code-exchange/browser-based-sms-notifications)

## Unit 2 - Programmable Voice

### Video 1 - Appreciating the Phone

- 👀 [Ahoy - Wikipedia](<https://en.wikipedia.org/wiki/Ahoy_(greeting)>)
- 👩‍💻 [twilio.com/ahoy - All things developer](https://twilio.com/ahoy)

### Video 2 - Receive a Call

- 📚 [`<Say>`](https://www.twilio.com/docs/voice/twiml/say)
- 📚 [Text to Speech - Amazon Polly](https://www.twilio.com/docs/voice/twiml/say/text-speech#amazon-polly)
- 📚 [`<Play>`](https://www.twilio.com/docs/voice/twiml/play)
- 👀 [Rickrolling](https://en.wikipedia.org/wiki/Rickrolling)

#### TwiML Bin: Ahoy World

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Ahoy World!</Say>
</Response>
```

#### TwiML Bin: Ahoy Rick

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Matthew-Neural">And now an important message:</Say>
  <Play>https://twil.io/professional-recording-example</Play>
</Response>
```

### Video 3 - Gather Input

- 📚 [`<Gather>`](https://www.twilio.com/docs/voice/twiml/gather)
- 📚 [Queueing Calls](https://www.twilio.com/docs/voice/queue-calls)
- 👀 [Twilio Studio](https://www.twilio.com/studio)
- 📽 [Speed up your Development Process with Twilio Studio](https://www.youtube.com/watch?v=14FXnUgrZ6w)

#### TwiML Bin: Ahoy World (featuring Gather)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Matthew-Neural">And now an important message:</Say>
  <Gather numDigits="1" action="https://exploration-[YOUR DIGITS HERE].twil.io/handle-feedback">
    <Say voice="Polly.Matthew-Neural">Press 1 to approve of this joke, Press 2 to talk to a manager</Say>
    <Play>https://twil.io/professional-recording-example</Play>
  </Gather>
  <Say>You listened to the whole song! Way to never give up!</Say>
</Response>
```

#### Function: /handle-feedback

```javascript
exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  console.log(`User pressed ${event.Digits}`);
  if (event.Digits === "1") {
    twiml.say("That's great! Glad we didn't let you down!");
  } else if (event.Digits === "2") {
    //TODO: Look up user from phone number => event.From
    const name = "Karen";
    twiml.say(
      `Thank you for reporting this joke, ${name}, connecting you with a supervisor`
    );
    twiml.enqueue("managers");
  } else {
    twiml.say(`You pressed ${event.Digits}...but why?`);
  }
  return callback(null, twiml);
};
```

### Video 4 - Create an Outbound Call

- 📚 [Twilio CLI](https://twil.io/cli)
- 👩‍💻 [Twilio CLI Debugger Plugin](https://github.com/twilio/plugin-debugger)
- 📚 [Call Resource Status Callback](https://www.twilio.com/docs/voice/api/call-resource#statuscallback)
- 📚 [Messaging Status Callback pattern](https://www.twilio.com/docs/usage/webhooks/sms-webhooks#type-2-status-callbacks)
- 📚 [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection)

#### Function: /status-displayer

```javascript
exports.handler = function (context, event, callback) {
  console.log(`Call: ${event.CallSid} status ${event.CallStatus}`);
  return callback(null);
};
```

### Video 5 - Review + Practice

- 📚 [`<Gather>` `input` attribute](https://www.twilio.com/docs/voice/twiml/gather#input)
- 📚 [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection)
- 🙋‍♂️ [Sending and Receiving Limitations on Calls and SMS Messages](https://support.twilio.com/hc/en-us/articles/223183648-Sending-and-Receiving-Limitations-on-Calls-and-SMS-Messages)
- 👀 [Media Streams - Build realtime voice applications](https://www.twilio.com/media-streams)
- 👀 [SIP Interface - Programmatic Voice over Internet or Voip calls](https://www.twilio.com/sip-interface)
- 👀 [Elastic SIP Trunking](https://www.twilio.com/sip-trunking)
- 👀 [Voice SDK - Client side (browser/mobile) voice applications](https://www.twilio.com/voice-sdk)

#### Practice Programmable Voice

Here are some practice and example applications for you to experiment with. Let us know how it's going [@TwilioDevs](https://twitter.com/TwilioDevs) or in the [community](https://community.twilio.com)

- 💡 Using a Twilio Function as an incoming call handler, create a call-in hotline that reports the weather using a [weather API](https://openweathermap.org/api)
- 💡 Create an answering machine using the [`<Record> TwiML verb`](https://www.twilio.com/docs/voice/twiml/record) that texts you the transcription via the [`transcribeCallback`](https://www.twilio.com/docs/voice/twiml/record#attributes-transcribe-callback)
- 🧪 [Tutorial - How to Build Call Forwarding](https://www.twilio.com/docs/voice/tutorials/call-forwarding)
- 👩‍💻 [CodeExchange - Basic IVR](https://www.twilio.com/code-exchange/basic-ivr)
- 👩‍💻 [CodeExchange - Pin Protected Conference Line](https://www.twilio.com/code-exchange/pin-protected-conference-line)

## Unit 3 - All Together Now

### Video 1 - Project Introduction

### Video 2 - Use the Serverless Toolkit

- 📚 [Getting Started with the Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)
- 🧰 [ngrok](https://ngrok.com/)

### Video 3 - Create a Conference

- 📚 [Voice Conference](https://www.twilio.com/docs/voice/conference)

### Video 4 - Use Private Data

### Video 5 - Allow for registration via SMS

### Video 6 - Call the registrants

### Video 7 - Deploy

### Video 8 - Send a follow-up survey

### Video 9 - Wrap-up
