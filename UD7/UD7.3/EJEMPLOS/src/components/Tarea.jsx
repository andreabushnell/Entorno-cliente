import { useState } from "react";
import './Tarea.css'; // Importa los estilos CSS

const Tarea = ({ tarea, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={tarea.realizado}
        onChange={onToggle}
      />
      <span className={tarea.realizado ? "tareaRealizada" : "tareaTexto"}>
        {tarea.texto}
      </span>
    </div>
  );
};
export default Tarea;
