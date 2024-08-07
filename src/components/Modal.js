import React, { } from "react";

const Modal = ({ show, item, onClose, datos}) => {
 
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
          <div className="inner-box">
            <img src={datos.portada} alt=""/>
            <div className="info">
              <h1>{datos.titulo}</h1>
              <h3>{datos.autor}</h3>
              <h4>{datos.publicado} - <span>{datos.fecha}</span></h4><br />
              <a href={datos.enlace}><button>Leer</button></a>
            </div>
          </div>
          <h4 className="description">{datos.sinopsis}</h4>
        </div>
      </div>
    </>
  )
}

export default Modal