import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});

  const validar = () => {
    let erroresTemp = {};
    
    if (!datos.nombre.trim()) {
      erroresTemp.nombre = 'El nombre y apellido son obligatorios.';
    }
    
    if (!datos.email.trim()) {
      erroresTemp.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      erroresTemp.email = 'El formato del correo electrónico no es válido.';
    }
    
    if (!datos.mensaje.trim()) {
      erroresTemp.mensaje = 'El mensaje no puede estar vacío.';
    } else if (datos.mensaje.length > 300) {
      erroresTemp.mensaje = 'El mensaje no debe superar los 300 caracteres.';
    }

    return erroresTemp;
  };

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    setErrores(erroresValidacion);

    if (Object.keys(erroresValidacion).length === 0) {
      // AQUÍ VA EL ENVÍO "COMO LO VISTO EN CLASES"
      // Si usaron un <form action="..."> clásico, podés usar e.target.submit();
      // Si usaron fetch() a una API (como Formspree o Formsubmit), va acá.
      alert('Datos validados correctamente. Listo para enviar a tu correo.');
    }
  };

  return (
    <div className="card contacto-container">
      <h1>Página de Contacto</h1>
      <p>Envíanos tu consulta y te responderemos a la brevedad.</p>
      
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="nombre">Nombre y Apellido:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={datos.nombre} 
            onChange={handleChange} 
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>

        <div className="campo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={datos.email} 
            onChange={handleChange} 
          />
          {errores.email && <span className="error">{errores.email}</span>}
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje (máx. 300 caracteres):</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            maxLength="300"
            rows="5"
            value={datos.mensaje} 
            onChange={handleChange} 
          />
          {errores.mensaje && <span className="error">{errores.mensaje}</span>}
          <div className="contador-caracteres">
            {datos.mensaje.length}/300
          </div>
        </div>

        <button type="submit" className="btn-enviar">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;