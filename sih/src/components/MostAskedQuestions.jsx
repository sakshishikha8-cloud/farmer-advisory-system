import React from 'react';
import '../styles/MostAskedQuestions.css';

const MostAskedQuestions = ({ onQuestionSelect }) => {
  const commonQuestions = [
    "What are the best practices for organic farming?",
    "How to identify and treat common crop diseases?",
    "What are the optimal irrigation methods for water conservation?",
    "Which crops are suitable for my soil type?",
    "How to implement integrated pest management?",
    "What are the current market prices for agricultural commodities?",
    "How to improve soil fertility naturally?",
    "What government schemes are available for farmers?"
  ];

  return (
    <div className="most-asked-questions">
      <h3>Frequently Asked Questions</h3>
      <div className="questions-list">
        {commonQuestions.map((question, index) => (
          <button
            key={index}
            className="question-item"
            onClick={() => onQuestionSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MostAskedQuestions;