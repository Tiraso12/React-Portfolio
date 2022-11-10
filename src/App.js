import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Top from './components/Top';
import About from './components/About';
import Project from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Top />
      <main className='container min-vh-75'>
        <About />
        <Project />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
