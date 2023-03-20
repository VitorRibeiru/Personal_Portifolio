import logo from './logo.svg';
import './App.css';
import './assets/css/import.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'; 
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import './bootstrap/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <NavBar/>
      <Banner/> 
        <Skills/>
        <Projects/>
    </div>
  );
}

export default App;
