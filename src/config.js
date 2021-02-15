import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = { 
  botName: "-- Online Learnig Helper Bot",
  initialMessages: [
	createChatBotMessage("Hello there! Currently I can help on the following topics:", {
		widget: "learningOptions",
	}),
  ],
  widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
	 {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
	  props: {
        options: [
          {
            text: "Intro to JavaScript",
            url:
              "https://www.w3schools.com/js/js_intro.asp",
            id: 1,
          },
          {
            text: "JavaScript Tutorials",
            url:
              "https://www.tutorialspoint.com/javascript/index.htm",
            id: 2,
          },
        ],
      },
    },
	 {
      widgetName: "awsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
	  props: {
        options: [
          {
            text: "Intro to AWS",
            url:
              "https://aws.amazon.com/getting-started/",
            id: 1,
          },
          {
            text: "AWS Tutorials",
            url:
              "https://aws.amazon.com/getting-started/hands-on/",
            id: 2,
          },
        ],
      },
    },
	 {
      widgetName: "cssLinks",
      widgetFunc: (props) => <LinkList {...props} />,
	  props: {
        options: [
          {
            text: "Intro to CSS",
            url:
              "https://www.w3schools.com/css/css_intro.asp",
            id: 1,
          },
          {
            text: "CSS Tutorials",
            url:
              "https://www.tutorialspoint.com/css/index.htm",
            id: 2,
          },
        ],
      },
    },
	 {
      widgetName: "htmlLinks",
      widgetFunc: (props) => <LinkList {...props} />,
	  props: {
        options: [
          {
            text: "Intro to HTML",
            url:
              "https://www.khanacademy.org/computing/computer-programming/html-css",
            id: 1,
          },
          {
            text: "HTML Tutorials",
            url:
              "https://www.codecademy.com/learn/learn-html",
            id: 2,
          },
        ],
      },
    },
	 {
      widgetName: "reactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
	  props: {
        options: [
          {
            text: "Intro to ReactJS",
            url:
              "https://reactjs.org/tutorial/tutorial.html",
            id: 1,
          },
          {
            text: "ReactJS Tutorials",
            url:
              "https://reactjs.org/docs/hello-world.html",
            id: 2,
          },
        ],
      },
    },	
	],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#300B7E",
    },
    chatButton: {
      backgroundColor: "#300B7E",
    },
  },
}

export default config