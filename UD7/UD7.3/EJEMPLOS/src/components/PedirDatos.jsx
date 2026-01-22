import { useEffect, useState } from 'react';

function PedirDatos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Este código se ejecuta después del renderizado inicial
    // Puedes realizar operaciones asíncronas aquí, como llamadas a una API
   
    // Ejemplo de solicitud a una API y actualización del estado
    fetch('./public/nombres.json')
      .then(response => response.json())
      .then(data => setDatos(data));

    // Función de limpieza
    return () => {
      // Código de limpieza aquí, se ejecuta antes de que el componente se desmonte
    };
  }, []); // El segundo argumento es un array de dependencias, si está vacío la función se ejecuta solo una vez

  // Resto del componente aquí
  return (
    <div>
      {datos}
    </div>
  );
}

export default PedirDatos;