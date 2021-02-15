import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "JavaScript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { 
	text: "AWS", 
	handler: props.actionProvider.handleAWSList, 
	id: 2 
	},
    { 
	text: "ReactJS", 
	handler: props.actionProvider.handleReactList,
	id: 3 
	},
    { 
	text: "CSS", 
	handler: props.actionProvider.handleCSSList,
	id: 4 
	},
    { 
	text: "HTML",
	handler: props.actionProvider.handleHTMLList,
	id: 5 
	},
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;