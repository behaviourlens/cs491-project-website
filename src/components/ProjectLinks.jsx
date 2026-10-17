import { ExternalLink, FolderGit2, Lock } from 'lucide-react';
import { githubOrganization, repositories } from '../data/repositories';
import Section from './Section';
import styles from './ProjectLinks.module.css';

function ProjectLinks() {
  return (
    <Section
      id="repositories"
      title="GitHub Repositories"
      intro={
        <>
          Project repositories are hosted under the{' '}
          <a href={githubOrganization} target="_blank" rel="noopener noreferrer">
            BehaviourLens GitHub organization
          </a>
          .
        </>
      }
    >
      {repositories.length === 0 ? (
        <p className={styles.empty}>Repository links will be added here once they are available.</p>
      ) : (
        <ul role="list" className={styles.list}>
          {repositories.map((repo) => {
            const isPrivate = repo.visibility === 'private';
            return (
              <li key={repo.url} className={styles.card}>
                <div className={styles.cardHeader}>
                  <FolderGit2 className={styles.icon} size={20} aria-hidden="true" />
                  <h3 className={styles.name}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${repo.name} on GitHub (opens in a new tab)`}
                    >
                      {repo.name}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </h3>
                  <span className={`badge ${isPrivate ? 'badge-neutral' : 'badge-accent'}`}>
                    {isPrivate && <Lock size={12} aria-hidden="true" />}
                    {isPrivate ? 'Private' : 'Public'}
                  </span>
                </div>
                {repo.description && <p className={styles.description}>{repo.description}</p>}
                {isPrivate && (
                  <p className={styles.notice}>
                    This repository is private. Access requires permission from the project team.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

export default ProjectLinks;
