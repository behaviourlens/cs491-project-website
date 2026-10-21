// status: 'planned' | 'in-progress' | 'implemented' | 'future'
// Use 'future' for ideas planned for later stages of the project.
export const features = [
  {
    title: 'Evidence-Based Task Evaluation',
    status: 'planned',
    description:
      'BehaviorLens aims to evaluate user task outcomes against predefined success criteria and recorded interaction evidence. Tasks can be classified as successful, unsuccessful, or inconclusive when insufficient evidence is available, with each assessment supported by relevant interaction records.',
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
      'For unsuccessful tasks or sessions exhibiting potential usability issues, BehaviorLens aims to analyze recorded interactions and generate actionable recommendations for improving the user experience. These suggestions may address confusing navigation paths, problematic interface elements, unnecessary steps, or other obstacles that prevent users from completing their tasks efficiently.',
  },
  {
    title: 'Team Collaboration',
    status: 'planned',
    description:
      'BehaviorLens aims to support collaboration by allowing team members to add timestamped notes to recorded sessions, mention other members, and investigate identified usability issues within a shared context.',
  },
  {
    title: 'Parametric Persona Builder',
    status: 'planned',
    description:
      'BehaviorLens aims to let users create AI persona profiles by adjusting parameters such as Big Five (OCEAN) personality traits, digital experience, risk tolerance, patience level, and user goals, and to vary these parameters to test how different users might behave.',
  },
  {
    title: 'Domain-Specific User Profiles',
    status: 'planned',
    description:
      'Persona profiles are intended to start from a shared base model that can be extended with sector-specific parameters, allowing companies to define user profiles that match their own sector, such as e-commerce, banking, or music, and their target audience.',
  },
  {
    title: 'Automated UX Testing with AI Agents',
    status: 'planned',
    description:
      'The platform aims to run AI personas through the same task scenarios on a website and record their interactions, so that the resulting paths can be analyzed in BehaviorLens alongside real user sessions to help identify usability issues.',
  },
  {
    title: 'Adaptive Persona Calibration',
    status: 'future',
    description:
      'In later stages of the project, BehaviorLens may group real users with similar behavior patterns (clustering) and use these patterns to update persona profiles automatically, so that personas better reflect actual user behavior over time.',
  },
];
