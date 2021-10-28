exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.MessagingResponse();
  console.log(`Feedback was ${event.Body}`);
  twiml.message("Thanks for not letting us miss out on your important feedback!");
  return callback(null, twiml);
};