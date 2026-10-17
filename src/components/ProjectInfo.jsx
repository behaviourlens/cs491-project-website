import { project } from '../data/project';
import { features } from '../data/features';
import Section from './Section';
import styles from './ProjectInfo.module.css';

const featureStatusLabels = {
  planned: 'Planned',
  'in-progress': 'In progress',
  implemented: 'Implemented',
};

function ProjectInfo() {
  const { description, objective, research } = project;

  return (
    <Section id="project" title="Project Information">
      <div className={styles.block}>
        <h3 className={styles.heading}>Project Description</h3>
        <div className={styles.prose}>
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Project Objective</h3>
        <div className={styles.prose}>
          {objective.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Key Features</h3>
        <p className={styles.note}>
          Each feature is marked with its current development status.
        </p>
        <ol role="list" className={styles.features}>
          {features.map((feature, index) => (
            <li key={feature.title} className={styles.feature}>
              <div className={styles.featureHeader}>
                <span className={styles.featureNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`badge ${feature.status === 'implemented' ? 'badge-accent' : 'badge-neutral'}`}
                >
                  {featureStatusLabels[feature.status]}
                </span>
              </div>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.featureText}>{feature.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Research Direction</h3>
        <div className={styles.prose}>
          {research.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{research.methodology}</p>
        </div>
        <h4 className={styles.subheading}>Potential evaluation dimensions</h4>
        <ul role="list" className={styles.dimensions}>
          {research.dimensions.map((dimension) => (
            <li key={dimension}>{dimension}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ProjectInfo;
