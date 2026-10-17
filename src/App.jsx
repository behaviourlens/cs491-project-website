import Header from './components/Header';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Team from './components/Team';
import Documents from './components/Documents';
import ProjectLinks from './components/ProjectLinks';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProjectInfo />
        <Team />
        <Documents />
        <ProjectLinks />
      </main>
      <Footer />
    </>
  );
}

export default App;
