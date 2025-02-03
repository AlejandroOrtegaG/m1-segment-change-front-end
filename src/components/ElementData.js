import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ElementData = () => {

    const location = useLocation();
    const details = location.state;


  if (!details) {
    return <div>No se encontró el elemento</div>;
  }

  return (
    <div>
      <h1>Detalles de [elemento]</h1>
      <p><strong>Fecha:</strong> {details.date}</p>
      <p><strong>Valor1:</strong> {details.col1}</p>
      <p><strong>Valor2:</strong> {details.col2}</p>
      <p><strong>Valor3:</strong> {details.col3}</p>
      <p><strong>Añadido por:</strong> {details.addedBy}</p>
      <p><strong>Descripción:</strong> {details.description}</p>
    </div>
  );
};

export default ElementData;
