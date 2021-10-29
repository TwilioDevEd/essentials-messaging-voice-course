from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)


@app.route("/auto-responder", methods=['POST'])
def auto_responder():
    """Respond to incoming message"""
    # Start our TwiML response
    twiml = MessagingResponse()

    print(f"Body was {request.values['Body']}")

    if request.values["Body"].upper() == "QUEST":
        twiml.message("Discover your power to change the world with code! https://twilio.com/quest")
    else:
        twiml.message(f"I don't know what you mean by \"{request.values['Body']}\". Did you mean QUEST?")
    return str(twiml)

if __name__ == "__main__":
    app.run(debug=True)
