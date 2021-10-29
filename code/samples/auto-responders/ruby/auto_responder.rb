require 'sinatra'
require 'twilio-ruby'

post '/auto-responder' do
  Twilio::TwiML::MessagingResponse.new do |twiml|
    if params['Body'].upcase == 'QUEST'
      twiml.message(body: 'Discover your power to change the world with code! https://twilio.com/quest')
    else
      twiml.message(body: "I don't know what you mean by \"#{params['Body']}\". Did you mean QUEST?")
    end
  end.to_s
end
