import { members, advisors } from '../data/team';
import Section from './Section';
import styles from './Team.module.css';

function Team() {
  return (
    <Section id="team" title="Team">
      <div className={styles.credits}>
        <h3 className="visually-hidden">Team Members</h3>
        <ul role="list" className={styles.members}>
          {members.map((member) => (
            <li key={member.studentId} className={styles.member}>
              <span className={styles.name}>{member.name}</span>
              <span className={styles.studentId}>
                <span className="visually-hidden">Student ID: </span>
                {member.studentId}
              </span>
            </li>
          ))}
        </ul>

        <h3 className={styles.advisedBy}>Advised by</h3>
        <ul role="list" className={styles.advisors}>
          {advisors.map((advisor) => (
            <li key={`${advisor.role}-${advisor.name}`}>
              <span className={styles.advisorName}>{advisor.name}</span>
              <span className={styles.role}> · {advisor.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Team;
