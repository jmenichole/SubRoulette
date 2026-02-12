export interface Question {
  post: string;
  options: string[];
  correctOption: number;
}

export const mockQuestions: Question[] = [
  {
    post: "I pooped in the sink. It was my proudest achievement of the day.",
    options: ["r/funny", "r/showerthoughts", "r/AmItheAsshole", "r/Unexpected"],
    correctOption: 0,
  },
  {
    post: "EA: 'We are proud of our accomplishments and the pride and accomplishment we feel in our work.'",
    options: ["r/gaming", "r/ProgrammerHumor", "r/memes", "r/antiwork"],
    correctOption: 1,
  },
  {
    post: "My girlfriend is pregnant. I don't know if it's mine. What do I do?",
    options: ["r/relationship_advice", "r/AmItheAsshole", "r/Advice", "r/Parenting"],
    correctOption: 1,
  },
  {
    post: "I accidentally called my teacher 'mom' in class today.",
    options: ["r/funny", "r/teenagers", "r/embarrassing", "r/Unexpected"],
    correctOption: 2,
  },
  {
    post: "Found this in my dad's closet. He says it's from his 'wild days'.",
    options: ["r/funny", "r/mildlyinteresting", "r/Whatcouldgowrong", "r/oddlysatisfying"],
    correctOption: 0,
  },
  {
    post: "My boss asked me to work overtime. I said no. Now I'm fired.",
    options: ["r/antiwork", "r/jobs", "r/AmItheAsshole", "r/LegalAdvice"],
    correctOption: 0,
  },
  {
    post: "I just won the lottery! What should I do first?",
    options: ["r/MillionaireMakers", "r/personalfinance", "r/Unexpected", "r/lottery"],
    correctOption: 2,
  },
  {
    post: "My cat just brought me a live mouse as a gift.",
    options: ["r/cats", "r/funny", "r/AnimalsBeingBros", "r/aww"],
    correctOption: 2,
  },
  {
    post: "I told my wife I love her. She said 'thanks'.",
    options: ["r/relationship_advice", "r/AmItheAsshole", "r/funny", "r/marriage"],
    correctOption: 1,
  },
  {
    post: "Found a wallet on the street. Inside: $500 and ID. What do I do?",
    options: ["r/LegalAdvice", "r/AmItheAsshole", "r/mildlyinteresting", "r/Unexpected"],
    correctOption: 1,
  },
  {
    post: "My girlfriend said she wants to try 'something new' in bed. I suggested roleplay.",
    options: ["r/sex", "r/relationship_advice", "r/funny", "r/AmItheAsshole"],
    correctOption: 3,
  },
  {
    post: "I just got a job offer for $200k. Should I take it?",
    options: ["r/personalfinance", "r/jobs", "r/careerguidance", "r/MillionaireMakers"],
    correctOption: 0,
  },
  {
    post: "My dog ate my homework. Literally.",
    options: ["r/funny", "r/dogs", "r/AnimalsBeingBros", "r/memes"],
    correctOption: 0,
  },
  {
    post: "I caught my roommate using my shampoo. He said 'it's just water'.",
    options: ["r/funny", "r/roommates", "r/AmItheAsshole", "r/mildlyinteresting"],
    correctOption: 2,
  },
  {
    post: "Just found out my 'friend' has been spreading rumors about me.",
    options: ["r/AmItheAsshole", "r/relationship_advice", "r/funny", "r/Drama"],
    correctOption: 3,
  },
  {
    post: "My boss complimented my work. I said 'thanks, dad'.",
    options: ["r/funny", "r/jobs", "r/embarrassing", "r/ProgrammerHumor"],
    correctOption: 2,
  },
  {
    post: "I asked my crush out. She said 'you're cute, but...'",
    options: ["r/dating_advice", "r/relationship_advice", "r/funny", "r/AmItheAsshole"],
    correctOption: 0,
  },
  {
    post: "Found a note in my library book: 'Meet me here tomorrow'.",
    options: ["r/Unexpected", "r/funny", "r/romancebooks", "r/mildlyinteresting"],
    correctOption: 0,
  },
  {
    post: "My teacher gave me an A+ on my project. I didn't do it.",
    options: ["r/school", "r/AmItheAsshole", "r/funny", "r/college"],
    correctOption: 1,
  },
  {
    post: "I told my parents I'm gay. They said 'we already knew'.",
    options: ["r/LGBTQ", "r/funny", "r/comingout", "r/Unexpected"],
    correctOption: 3,
  },
];
