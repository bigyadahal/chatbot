class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
	if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
	if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.greet_end();
    }
    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
	if (lowerCaseMessage.includes("aws")) {
      this.actionProvider.handleAWSList();
    }
	if (lowerCaseMessage.includes("css")) {
      this.actionProvider.handleCSSList();
    }
	if (lowerCaseMessage.includes("html")) {
      this.actionProvider.handleHTMLList();
    }
	if (lowerCaseMessage.includes("react")) {
      this.actionProvider.handleReactList();
    }
  }
}

export default MessageParser;