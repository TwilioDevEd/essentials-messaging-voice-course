##  Unit 1 - Introducing Twilio and Programmable Messaging

### Video 1 - Welcome

### Video 2 - Signing up

* Understand that trial account has limitations
* Obtain a trial number

### Video 3 - What even is a message?

* Identify that SMS stands for Short Messaging Service
* Identify that MMS stands for Multimedia Messaging Service
* Recall that SMS messages are built of 160 character segments
* Contrast SMS urgency with email's preferability
* Use the documentation to explore code samples

### Video 4 - Send a text message

* Use the Twilio CLI to send an outbound SMS message
* Use the Twilio CLI to send an MMS message
* Recall that multi-language helper library code samples are available in the documentation

### Video 5 - Receiving a message

* Recite that TwIML stands for Twilio Markup Language
* Recall that TwiML is tag based and case-sensitive
* Use a TwiML Bin for static responses
* Change incoming message handler to return static TwiML
* Create a static auto responder

### Video 6 - Responding dynamically

* State that a Webhook is a method to pass control to a web based application
* Use a Twilio Function for dynamic content
* Use the Twilio helper library to generate TwiML
* Recall that you can output debugging information in a Twilio Function using console.log
* Change the incoming message configuration to point to a deployed Twilio Function

### Video 7 - Review + Practice
* Recognize that regulations vary based on region as to what is allowed
* State that there are tools like Twilio Studio that can help to manage statelessness

## Unit 2 - Programmable Voice

### Video 1 - Appreciating the Phone

* Recall that voice is programmable with reusable building code blocks
* Recognize that PSTN stands for Public Switched Telephone Network
Video 2 - Receive a Call
* Modify settings on the phone number to handle incoming calls
* Use <Say> in a TwiML response to perform text-to-speech.
* Use <Play> in a TwiML response to play an audio file
Video 3 - Gather Input
* Understand that <Gather> is used to gather DTMF (Dual Tone Multi Frequency)
* Explain that the URL in the action parameter on the <Gather> will receive the Digits parameter in an HTTP request.
* Use a nested <Play> in <Gather> to perform a barge-in (interrupt the audio)
* Recall that context object in a Function handler has access to environment variables

### Video 4 - Create an Outbound Call

* Understand that there is a Call REST API Resource that represents a call.
* Use the debugger webhook to be notified of errors in real-time
* Restate that the default limit is one call per second

### Video 5 - Review + Practice

* Recall that there are client-side SDKs for use in websites and mobile applications

## Unit 3 - All Together Now

### Video 1 - Project Introduction

### Video 2 - Use the Serverless Toolkit

* Use environment variables to store secrets
* Recall that the context parameter in the Twilio Function handler will provide access to the environment variables
* Use the CLI to update your phone numbers incoming webhook
* Understand that local webhook development is possible using a tool like ngrok to open up a tunnel
* Restate that ngrok allows you to inspect requests from Twilio

### Video 3 - Create a Conference

* Restate that <Dial>ing a Conference by name will create a new conference if there is not an active conference with that name
* Update incoming voice handler using the Twilio CLI
* Recall that the participant list of a Conference contains active calls only

### Video 4 - Use Private Data
* Produce a private asset and import it into a Function

### Video 5 - Allow for registration via SMS

* Set incoming message handler via the CLI
* Recall how to produce a dynamic flow based on incoming SMS

### Video 6 - Call the registrants

* Use the add participant Conference API to create an outbound call
* Recognize the asynchronous promise pattern when using JavaScript array methods
* Recall that the default of 1 outbound Call Per Second can be changed

### Video 7 - Deploy

* Deploy a Twilio Application using the Serverless Toolkit
* Restate the X-Twilio-Signature header is used to protect Webhooks by signing with an auth token
* Create an X-Twilio-Signature header using the JavaScript helper library

### Video 8 - Send a follow-up survey

* Recognize Messaging Services as a recommended best practice to deal with regulations
* Define a Messaging Service as a container for numbers and feature configuration
* Create and wire up a protected function to handle incoming text messages

### Video 9 - Wrap-up
