import { Devvit, useState } from '@devvit/public-api';
import { questions } from './mockData.js';

Devvit.configure({
  redditAPI: true,
});

Devvit.addCustomPostType({
  name: 'SubRoulette',
  height: 'tall',
  render: (context) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'splash' | 'playing' | 'answered'>('splash');
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([...questions].sort(() => Math.random() - 0.5).slice(0, 10));

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    const handleAnswer = (answer: string) => {
      if (gameState === 'answered') return;

      const isCorrect = answer === currentQuestion.correctAnswer;
      
      setSelectedAnswer(answer);
      setGameState('answered');
      setShowResult(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    };

    const nextQuestion = () => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setGameState('playing');
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Game over logic handled by render
      }
    };

    const startGame = () => {
      setShuffledQuestions([...questions].sort(() => Math.random() - 0.5).slice(0, 10));
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState('playing');
      setSelectedAnswer(null);
      setShowResult(false);
    };

    const getButtonAppearance = (option: string): "primary" | "secondary" | "destructive" | "plain" => {
      if (!showResult) {
        return "primary";
      }

      if (option === currentQuestion.correctAnswer) {
        return "secondary";
      }

      if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
        return "destructive";
      }

      return "plain";
    };

    const isGameOver = currentQuestionIndex >= shuffledQuestions.length - 1 && showResult;
    const isSplash = gameState === 'splash';

    if (isSplash) {
      return (
        <vstack height="100%" width="100%" backgroundColor="#f2f2f2">
          {/* Header */}
          <hstack padding="medium" alignment="middle" backgroundColor="white" border="thin">
            <hstack gap="small" alignment="middle">
              <vstack backgroundColor="#FF4500" cornerRadius="full" padding="xsmall" alignment="center middle">
                <text color="white" size="large" weight="bold">🎮</text>
              </vstack>
              <hstack gap="none">
                <text size="large" weight="bold" color="black">Sub</text>
                <text size="large" weight="bold" color="#FF4500">Roulette</text>
              </hstack>
            </hstack>
            <spacer />
          </hstack>

          {/* Main Content */}
          <vstack alignment="center middle" grow gap="medium">
            <vstack 
              width="64px" 
              height="64px" 
              border="thick" 
              borderColor="#FF4500" 
              cornerRadius="full"
              padding="medium"
              alignment="center middle"
            >
               <text size="xlarge">🎲</text>
            </vstack>
            <vstack alignment="center middle" gap="small">
              <text size="xxlarge" weight="bold">SubRoulette</text>
              <text size="medium" color="secondary" alignment="center">
                Can you guess which subreddit these posts belong to?{"\n"}
                Test your Reddit knowledge in 10 random questions!
              </text>
            </vstack>
            <spacer size="medium" />
            <button 
              appearance="primary" 
              onPress={startGame}
            >
              Start Game
            </button>
          </vstack>

          {/* Footer */}
          <vstack padding="medium" alignment="center middle" gap="small">
            <text size="xsmall" color="secondary">
              SubRoulette • A Hackathon Submission
            </text>
            <hstack gap="medium" alignment="center middle">
              <text size="xsmall" color="#FF4500" weight="bold">{"<> Made for the community"}</text>
            </hstack>
          </vstack>
        </vstack>
      );
    }

    return (
      <vstack gap="medium" padding="medium">
        {/* Header */}
        <hstack gap="medium" alignment="center">
          <text style="heading" size="large">SubRoulette</text>
          <spacer />
          <text style="body" size="medium">Score: {String(score)}/{String(shuffledQuestions.length)}</text>
        </hstack>

        {/* Progress */}
        <text style="body" size="small" color="secondary">
          Question {String(currentQuestionIndex + 1)} of {String(shuffledQuestions.length)}
        </text>

        {/* Question */}
        <vstack gap="small" padding="medium" backgroundColor="neutral" cornerRadius="medium">
          <text style="body" size="medium" weight="bold">
            Which subreddit does this post belong to?
          </text>
          <text style="body" size="medium">
            "{currentQuestion.postContent}"
          </text>
        </vstack>

        {/* Options */}
        <vstack gap="small">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              appearance={getButtonAppearance(option)}
              onPress={() => handleAnswer(option)}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </vstack>

        {/* Result & Next Button */}
        {showResult && (
          <vstack gap="small">
            <text style="body" size="large" weight="bold">
              {selectedAnswer === currentQuestion.correctAnswer 
                ? "Correct! +1 point" 
                : "Wrong! The answer was " + currentQuestion.correctAnswer}
            </text>
            
            {isGameOver ? (
              <vstack gap="small" alignment="center">
                <text style="heading" size="large">Game Over!</text>
                <text style="body" size="medium">Final Score: {String(score)}/{String(shuffledQuestions.length)}</text>
                <button
                  appearance="primary"
                  onPress={() => {
                    setCurrentQuestionIndex(0);
                    setScore(0);
                    setGameState('splash');
                    setSelectedAnswer(null);
                    setShowResult(false);
                  }}
                >
                  Back to Start
                </button>
              </vstack>
            ) : (
              <button
                appearance="primary"
                onPress={nextQuestion}
              >
                Next Question
              </button>
            )}
          </vstack>
        )}
      </vstack>
    );
  }
});

Devvit.addMenuItem({
  label: 'Create SubRoulette Game',
  location: ['subreddit'],
  onPress: async (_event, context) => {
    const subreddit = await context.reddit.getCurrentSubreddit();
    try {
      await context.reddit.submitCustomPost({
        title: 'SubRoulette - Guess the Subreddit!',
        subredditName: subreddit.name,
      });
      context.ui.showToast('SubRoulette game created!');
    } catch (error) {
      console.error('Failed to create post:', error);
      context.ui.showToast('Error: Could not create post. Check permissions.');
    }
  },
});

// Fallback: Create game when a moderator comments
Devvit.addTrigger({
  event: 'CommentSubmit',
  onEvent: async (event, context) => {
    if (!event.comment || !event.subreddit) return;
    
    // Create the game post
    await context.reddit.submitCustomPost({
      title: 'SubRoulette - Guess the Subreddit!',
      subredditName: event.subreddit.name,
    });
  },
});

export default Devvit;
