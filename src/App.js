import "./App.css";
import Formulario from "./components/Formulario";
import Tasklist from "./components/Tasklist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/TaskApp" element={<Tasklist />} />
          <Route path="/TaskApp/create" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
