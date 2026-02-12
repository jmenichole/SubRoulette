export interface Question {
  id: number;
  postContent: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    postContent: "My girlfriend is going to college. How do I make sure she doesn't cheat on me?",
    options: ["r/AdviceAnimals", "r/relationships", "r/dating_advice", "r/askreddit"],
    correctAnswer: "r/AdviceAnimals"
  },
  {
    id: 2,
    postContent: "TIFU by buying my girlfriend a $5000 ring",
    options: ["r/tifu", "r/relationships", "r/personalfinance", "r/jewelry"],
    correctAnswer: "r/tifu"
  },
  {
    id: 3,
    postContent: "What is the most illegal thing you have ever done?",
    options: ["r/AskReddit", "r/confessions", "r/TrueOffMyChest", "r/reddit"],
    correctAnswer: "r/AskReddit"
  },
  {
    id: 4,
    postContent: "My cat learned how to open the fridge door. Now I come home to find her eating my lunch every day. She's too smart for her own good!",
    options: ["r/aww", "r/funny", "r/cats", "r/pets"],
    correctAnswer: "r/cats"
  },
  {
    id: 5,
    postContent: "Just finished implementing a binary search tree in C++. The recursion is killing me, but it works! Any tips for optimizing it?",
    options: ["r/learnprogramming", "r/programming", "r/coding", "r/computers"],
    correctAnswer: "r/learnprogramming"
  },
  {
    id: 6,
    postContent: "Made homemade pizza from scratch tonight. The crust came out perfect - crispy on the outside, chewy inside. Secret ingredient: a dash of olive oil in the dough.",
    options: ["r/food", "r/recipes", "r/cooking", "r/eatcheapandhealthy"],
    correctAnswer: "r/recipes"
  },
  {
    id: 7,
    postContent: "Spent 8 hours debugging why my React component wasn't re-rendering. Turned out I forgot to add the dependency to useEffect. Facepalm moment.",
    options: ["r/reactjs", "r/javascript", "r/programming", "r/learnprogramming"],
    correctAnswer: "r/reactjs"
  },
  {
    id: 8,
    postContent: "My dog absolutely refuses to go for walks when it's raining. He'll just sit by the door and give me the most judgmental stare. Anyone else deal with this?",
    options: ["r/dogs", "r/funny", "r/aww", "r/pets"],
    correctAnswer: "r/dogs"
  },
  {
    id: 9,
    postContent: "Finally beat that boss in Elden Ring after 50+ attempts. The sense of accomplishment is unreal. What are your favorite 'gotcha' moments in games?",
    options: ["r/gaming", "r/EldenRing", "r/pcgaming", "r/Games"],
    correctAnswer: "r/EldenRing"
  },
  {
    id: 10,
    postContent: "Scientists just discovered a new species of deep-sea fish that glows in the dark. It has bioluminescent organs and lives at depths where no light penetrates. Nature is amazing!",
    options: ["r/science", "r/askscience", "r/biology", "r/interestingasfuck"],
    correctAnswer: "r/science"
  },
  {
    id: 11,
    postContent: "Went to the gym for the first time in months. My body is screaming at me, but I feel accomplished. What's your go-to workout when you're getting back into fitness?",
    options: ["r/fitness", "r/getfit", "r/bodybuilding", "r/running"],
    correctAnswer: "r/fitness"
  },
  {
    id: 12,
    postContent: "Just watched Oppenheimer. Christopher Nolan outdid himself again. The practical effects and sound design were incredible. Thoughts?",
    options: ["r/movies", "r/TrueFilm", "r/filmmakers", "r/letterboxd"],
    correctAnswer: "r/movies"
  },
  {
    id: 13,
    postContent: "My boss asked me to work overtime on a project with no extra pay. I politely declined and explained my current workload. He seemed surprised. Am I wrong here?",
    options: ["r/antiwork", "r/work", "r/careerguidance", "r/jobs"],
    correctAnswer: "r/antiwork"
  },
  {
    id: 14,
    postContent: "Hiked to the top of a mountain today. The view was breathtaking - could see for miles. Makes all the sweat and sore muscles worth it.",
    options: ["r/hiking", "r/outdoors", "r/travel", "r/photography"],
    correctAnswer: "r/hiking"
  },
  {
    id: 15,
    postContent: "My 3D printer just finished a model of the Death Star. It took 12 hours but looks amazing. What should I print next?",
    options: ["r/3Dprinting", "r/DIY", "r/maker", "r/engineering"],
    correctAnswer: "r/3Dprinting"
  },
  {
    id: 16,
    postContent: "Just got back from Japan. The food, culture, and people were incredible. Favorite memory: eating ramen at midnight in Shibuya.",
    options: ["r/travel", "r/japan", "r/food", "r/photography"],
    correctAnswer: "r/travel"
  },
  {
    id: 17,
    postContent: "My sourdough bread finally came out perfect! The crust is crunchy, crumb is open, and it tastes amazing. 6 months of practice paid off.",
    options: ["r/Breadit", "r/recipes", "r/food", "r/baking"],
    correctAnswer: "r/Breadit"
  },
  {
    id: 18,
    postContent: "Discovered that my neighbor has been illegally dumping trash in the community area. Took photos and reported it to the HOA. Feels good to be a good citizen.",
    options: ["r/maliciouscompliance", "r/justice", "r/evil", "r/askreddit"],
    correctAnswer: "r/maliciouscompliance"
  },
  {
    id: 19,
    postContent: "Spent the weekend building a gaming PC. First time doing it myself. Everything works perfectly! Total cost: $800. What's your build?",
    options: ["r/buildapc", "r/gaming", "r/pcgaming", "r/hardware"],
    correctAnswer: "r/buildapc"
  },
  {
    id: 20,
    postContent: "My kid drew a picture of our family as superheroes. I'm the one with laser eyes, apparently. Kids have the best imaginations.",
    options: ["r/parenting", "r/aww", "r/funny", "r/drawing"],
    correctAnswer: "r/parenting"
  }
];
