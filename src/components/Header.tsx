import React from 'react';

interface HeaderProps {
  score: number;
  questionNumber: number;
  totalQuestions: number;
}

const Header: React.FC<HeaderProps> = ({ score, questionNumber, totalQuestions }) => {
  return (
    <header className="header">
      <h1>Subreddit Guessing Game</h1>
      <div className="stats">
        <span>Score: {score}/{totalQuestions}</span>
        <span>Question: {questionNumber}/{totalQuestions}</span>
      </div>
    </header>
  );
};

export default Header;
