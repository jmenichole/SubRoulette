import React from 'react';

interface ResultsModalProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

const ResultsModal: React.FC<ResultsModalProps> = ({ score, totalQuestions, onPlayAgain }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="results-modal">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>Your final score: {score}/{totalQuestions}</p>
        <p>Percentage: {percentage}%</p>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default ResultsModal;
