import React from 'react';

interface QuestionAreaProps {
  post: string;
}

const QuestionArea: React.FC<QuestionAreaProps> = ({ post }) => {
  return (
    <div className="question-area">
      <div className="post-content">
        <p>{post}</p>
      </div>
    </div>
  );
};

export default QuestionArea;
