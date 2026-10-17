export const project = {
  name: 'BehaviourLens',
  summary:
    'A web-based UX research and behavioral analytics platform for understanding how users interact with websites.',
  institution: 'Bilkent University',
  department: 'Department of Computer Engineering',
  course: 'CS491 / CS492 — Senior Design Project',

  pronunciation: {
    respelling: 'bih-HAYV-yer-lens',
    ipa: '/bɪˈheɪvjə lɛnz/',
    // Path in public/, no leading slash, e.g. 'assets/pronunciation.mp3'.
    // Leave as null until the recording exists; the play button stays hidden.
    audio: 'assets/pronunciation.mp3',
  },

  description: [
    'BehaviourLens is a web-based UX research and behavioral analytics platform designed to help researchers, designers, and developers understand how users interact with websites, identify usability issues, and evaluate user behavior through recorded sessions.',
    'The platform aims to provide session replay, click maps, scroll maps, and interaction analytics to visualize user activity and identify potential usability problems.',
    'Rather than treating behavioral signals such as repeated clicks or prolonged inactivity as definitive evidence of usability issues, BehaviourLens aims to evaluate these signals alongside task outcomes and observable interaction evidence.',
  ],

  objective: [
    'The primary objective of BehaviourLens is to provide a unified platform that combines behavioral analytics, evidence-based task evaluation, actionable UX improvement recommendations, automated test generation, and team collaboration.',
    'By connecting the identification of usability issues with potential solutions and their subsequent verification, BehaviourLens aims to streamline the entire UX improvement process.',
  ],

  research: {
    paragraphs: [
      'Alongside platform development, the project explores the behavioral evaluation of LLM-based web agents in UX testing.',
      'The research aims to investigate whether assigning different user personas to LLM agents produces observable and repeatable differences in their interaction patterns when completing identical web tasks.',
    ],
    dimensions: [
      'Task completion',
      'Navigation paths',
      'Action sequences',
      'Error recovery',
      'Behavioral consistency',
      'Execution cost',
    ],
    methodology:
      'The research methodology is being refined through a review of existing web-agent benchmarks, synthetic UX testing approaches, and persona modeling techniques.',
  },
};
