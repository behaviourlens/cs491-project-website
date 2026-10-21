export const project = {
  name: 'BehaviorLens',
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
    'BehaviorLens is a web-based UX research and behavioral analytics platform designed to help researchers, designers, and developers understand how users interact with websites, identify usability issues, and evaluate user behavior through recorded sessions.',
    'The platform aims to provide session replay, click maps, scroll maps, and interaction analytics to visualize user activity and identify potential usability problems.',
    'Rather than treating behavioral signals such as repeated clicks or prolonged inactivity as definitive evidence of usability issues, BehaviorLens aims to evaluate these signals alongside task outcomes and observable interaction evidence.',
    'In addition to analyzing real user sessions, BehaviorLens aims to let companies and UX researchers create domain-specific, parametric AI personas tailored to their target audience, use these personas to test websites automatically, and analyze the resulting interaction paths within the platform.',
  ],

  objective: [
    'The primary objective of BehaviorLens is to provide a unified platform that combines behavioral analytics, evidence-based task evaluation, AI persona–based automated UX testing, actionable UX improvement recommendations, automated test generation, and team collaboration.',
    'Persona-based testing aims to let teams explore how different types of users might interact with a website, before or alongside studies with real users.',
    'By connecting the identification of usability issues with potential solutions and their subsequent verification, BehaviorLens aims to streamline the entire UX improvement process.',
  ],

  research: {
    paragraphs: [
      'Alongside platform development, the project explores how LLM-based AI personas can be used in UX testing.',
      'Rather than describing personas through fixed categories such as introverted, extroverted, or patient, the project aims to define them parametrically. Each persona is configured through adjustable values, so that UX researchers can create starting profiles that reflect their own target audience and vary individual parameters to test different user behaviors.',
      'Personas are also intended to be domain-specific. Instead of building a separate persona model for every sector, such as music, e-commerce, or banking, a shared base model is extended with sector-specific parameters that reflect the needs and characteristics of each target user group.',
      'The project also explores adaptive personas. Rather than remaining limited to their initial static profiles, personas could be refined using real user behavior data provided by a company. Initial experiments will assess how this approach can be developed.',
    ],
    methodology:
      'The research methodology is being refined through a review of existing web-agent benchmarks, synthetic UX testing approaches, and persona modeling techniques.',
    questions: [
      'Do AI personas created with different personality, experience, and sector-specific behavior parameters show meaningful and repeatable behavioral differences on the same UX tasks?',
      'Do the navigation paths that different AI personas follow while completing web tasks make it easier to identify UX issues?',
    ],
    parameters: [
      'Big Five (OCEAN) personality traits',
      'Digital experience',
      'Risk tolerance',
      'Patience level',
      'User goals',
      'Sector-specific behavioral tendencies',
    ],
    dimensions: [
      'Task completion',
      'Navigation paths',
      'Action sequences',
      'Error recovery',
      'Behavioral consistency',
      'Execution cost',
    ],
  },
};
