import './App.css';
import gnoboc from './images/20200809_164000.jpg';
import Tasklist from './components/Tasklist';


function App() {
  return (
    <div class = "App">

      <div class = "img-contenedor">
        <img 
        src = {gnoboc}
        alt = "gnoboc-img" 
        class = "gnoboc-img" />
      </div>

      <div class = "contenedor-tasks">
          <Tasklist />
      </div>
    </div>
  );
}

export default App;
