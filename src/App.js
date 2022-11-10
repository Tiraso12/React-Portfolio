import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Top from './components/Top';
import About from './components/About';
import Project from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Top />
      </header>
      <main className='container min-vh-75'>
        <About />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
