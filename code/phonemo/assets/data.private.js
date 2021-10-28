class Data {
  constructor(context) {
    this.context = context;
  }

  getCurrentTalk() {
    return this.getUpcomingTalks()[0];
  }

  getUpcomingTalks() {
    return [
      {
        title: "Billionaires in Space",
        code: "astronaut",
        startTime: "2021-10-01T17:00:00.038Z",
        speakers: [
          {
            name: "Craig",
            phoneNumber: "+15038368731",
          },
        ],
      },
      {
        title: "Taco Tuesdays should be every day",
        code: "taco",
        startTime: "2021-10-02T17:00:00.038Z",
        speakers: [
          {
            name: "Craig",
            phoneNumber: "+15038368731",
          },
        ],
      },
    ];
  }

  getTalkByCode(code) {
    const talks = this.getUpcomingTalks();
    return talks.find((talk) => talk.code === code);
  }

  addRegistration(code, phoneNumber) {
    // NOOP
    return true;
  }

  async getRegistrants(talk) {
    // TODO: This needs to come from an external data source
    // NOT the messages log
    const client = this.context.getTwilioClient();
    const messages = await client.messages.list({
      to: this.context.TWILIO_PHONE_NUMBER,
    });
    return messages
      .filter((msg) => {
        const action = this.parseInput(msg.body);
        return action.command === "join" && action.code === talk.code;
      })
      .map((msg) => {
        return { phoneNumber: msg.from };
      });
  }

  parseInput(input) {
    // eg: join tacos
    const action = {
      input,
    };
    const normalized = input.trim().toLowerCase();
    const parts = normalized.split(/\s+/);
    if (parts.length === 2) {
      action.command = parts[0];
      action.code = parts[1];
    }
    return action;
  }
}

module.exports = {
  Data,
};
