import { useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { project } from '../data/project';
import { assetUrl } from '../utils/assetUrl';
import styles from './Hero.module.css';

function PronunciationButton({ src }) {
  const audioRef = useRef(null);

  const play = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <audio ref={audioRef} src={assetUrl(src)} preload="none" />
      <button
        type="button"
        className={styles.play}
        aria-label={`Play pronunciation of ${project.name}`}
        onClick={play}
      >
        <Volume2 size={20} aria-hidden="true" />
      </button>
    </>
  );
}

function Hero() {
  const { name, summary, pronunciation } = project;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <h1 id="hero-title" className={styles.title}>
          {name}
        </h1>

        <div className={styles.pronunciation}>
          <div>
            <span className={styles.label}>Pronounced</span>
            <p>
              <span className={styles.respelling}>{pronunciation.respelling}</span>{' '}
              <span className={styles.ipa}>
                · <span lang="en-fonipa">{pronunciation.ipa}</span>
              </span>
            </p>
          </div>
          {pronunciation.audio && <PronunciationButton src={pronunciation.audio} />}
        </div>

        <p className={styles.summary}>{summary}</p>
      </div>
    </section>
  );
}

export default Hero;
