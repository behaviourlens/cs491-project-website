import { CalendarClock, Download, ExternalLink, FileText } from 'lucide-react';
import { documents } from '../data/documents';
import { assetUrl } from '../utils/assetUrl';
import Section from './Section';
import styles from './Documents.module.css';

// Dates are stored as 'YYYY-MM-DD'; parse them as local dates to avoid timezone shifts.
const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

function DocumentActions({ doc }) {
  if (doc.file) {
    const href = assetUrl(doc.file);
    return (
      <div className={styles.actions}>
        <a
          className="button button-primary"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${doc.title} (opens in a new tab)`}
        >
          <FileText size={16} aria-hidden="true" />
          View
        </a>
        <a className="button" href={href} download aria-label={`Download ${doc.title}`}>
          <Download size={16} aria-hidden="true" />
          Download
        </a>
      </div>
    );
  }

  if (doc.url) {
    return (
      <div className={styles.actions}>
        <a
          className="button button-primary"
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${doc.title} (opens in a new tab)`}
        >
          <ExternalLink size={16} aria-hidden="true" />
          View
        </a>
      </div>
    );
  }

  return null;
}

function DocumentItem({ doc }) {
  const isAvailable = doc.status === 'available';
  const date = isAvailable ? doc.submittedDate : doc.dueDate;

  return (
    <li className={isAvailable ? styles.item : `${styles.item} ${styles.upcoming}`}>
      <div className={styles.body}>
        <h4 className={styles.title}>{doc.title}</h4>
        <p className={styles.meta}>
          <span className={`badge ${isAvailable ? 'badge-accent' : 'badge-neutral'}`}>
            {isAvailable ? 'Available' : 'Upcoming'}
          </span>
          {doc.category && <span>{doc.category}</span>}
          {date && (
            <span className={styles.date}>
              {!isAvailable && <CalendarClock size={15} aria-hidden="true" />}
              {isAvailable ? 'Submitted' : 'Due'} <time dateTime={date}>{formatDate(date)}</time>
            </span>
          )}
        </p>
        {doc.description && <p className={styles.description}>{doc.description}</p>}
      </div>
      {isAvailable && <DocumentActions doc={doc} />}
    </li>
  );
}

function Documents() {
  const semesters = [...new Set(documents.map((doc) => doc.semester))];

  return (
    <Section id="documents" title="Project Documents">
      {documents.length === 0 ? (
        <p className={styles.empty}>
          No deliverables have been listed yet. Course reports, forms, and presentations will
          appear here as the project progresses.
        </p>
      ) : (
        semesters.map((semester) => (
          <div key={semester} className={styles.semester}>
            <h3 className={styles.semesterTitle}>{semester}</h3>
            <ul role="list" className={styles.list}>
              {documents
                .filter((doc) => doc.semester === semester)
                .map((doc) => (
                  <DocumentItem key={doc.title} doc={doc} />
                ))}
            </ul>
          </div>
        ))
      )}
    </Section>
  );
}

export default Documents;
