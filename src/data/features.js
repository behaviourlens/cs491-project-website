// status: 'planned' | 'in-progress' | 'implemented'
export const features = [
  {
    title: 'Evidence-Based Task Evaluation',
    status: 'planned',
    description:
      'BehaviourLens aims to evaluate user task outcomes against predefined success criteria and recorded interaction evidence. Tasks can be classified as successful, unsuccessful, or inconclusive when insufficient evidence is available, with each assessment supported by relevant interaction records.',
  },
  {
    title: 'Session-to-Test Generation',
    status: 'planned',
    description:
      'The platform aims to transform interaction sequences associated with usability issues into executable automated test scenarios using tools such as Playwright. This would help developers reproduce problems, verify fixes, and perform regression testing.',
  },
  {
    title: 'Session Improvement Recommendations',
    status: 'planned',
    description:
      'For unsuccessful tasks or sessions exhibiting potential usability issues, BehaviourLens aims to analyze recorded interactions and generate actionable recommendations for improving the user experience. These suggestions may address confusing navigation paths, problematic interface elements, unnecessary steps, or other obstacles that prevent users from completing their tasks efficiently.',
  },
  {
    title: 'Team Collaboration',
    status: 'planned',
    description:
      'BehaviourLens aims to support collaboration by allowing team members to add timestamped notes to recorded sessions, mention other members, and investigate identified usability issues within a shared context.',
  },
];
