// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Estas son las rutas relativas correctas:
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Servicios from './pages/servicios';
import Contacto from './pages/Contacto';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;