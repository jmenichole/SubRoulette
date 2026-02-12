import React from 'react';

interface OptionsProps {
  options: string[];
  onSelect: (index: number) => void;
  selectedOption: number | null;
  correctOption: number;
  showFeedback: boolean;
}

const Options: React.FC<OptionsProps> = ({
  options,
  onSelect,
  selectedOption,
  correctOption,
  showFeedback,
}) => {
  const getButtonClass = (index: number) => {
    if (!showFeedback) return 'option-button';
    if (index === correctOption) return 'option-button correct';
    if (index === selectedOption && index !== correctOption) return 'option-button incorrect';
    return 'option-button disabled';
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          className={getButtonClass(index)}
          onClick={() => !showFeedback && onSelect(index)}
          disabled={showFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
