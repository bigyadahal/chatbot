class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage("Hello There!.")
    this.updateChatbotState(greetingMessage)
  }
  greet_end() {
    const greetingMessage = this.createChatBotMessage("Thank You for using ChatBot! Bye!")
    this.updateChatbotState(greetingMessage)
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "The following are some excellent JS materials:",
      {
        widget: "javascriptLinks",
      }
    );
	this.updateChatbotState(message);
  };
  handleAWSList = () => {
    const message = this.createChatBotMessage(
      "The following are some excellent AWS materials:",
      {
        widget: "awsLinks",
      }
    );
	this.updateChatbotState(message);
  };
  handleCSSList = () => {
    const message = this.createChatBotMessage(
      "The following are some excellent CSS materials:",
      {
        widget: "cssLinks",
      }
    );
	this.updateChatbotState(message);
  };
  handleHTMLList = () => {
    const message = this.createChatBotMessage(
      "The following are some excellent HTML materials:",
      {
        widget: "htmlLinks",
      }
    );
	this.updateChatbotState(message);
  };
  handleReactList = () => {
    const message = this.createChatBotMessage(
      "The following are some excellent React materials:",
      {
        widget: "reactLinks",
      }
    );	
	
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. 
	// The setState function here actually manipulates the top level state of the Chatbot, 
	// so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;