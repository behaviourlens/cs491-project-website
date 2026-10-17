import { project } from '../data/project';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{project.name}</p>
          <p>{project.course}</p>
        </div>
        <div>
          <p>{project.institution}</p>
          <p>{project.department}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
