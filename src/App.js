import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Top from './components/Top';
import About from './components/About';
import Project from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="">
        <Top />
      </header>
      <main>
        <About />
        <Project/>
      </main>
    </div>
  );
}

export default App;
