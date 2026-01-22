import { useState } from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
  const [tareasState, setTareasState] = useState(tareas);

  const toggleRealizado = (index) => {
    const nuevasTareas = [...tareasState];
    nuevasTareas[index].realizado = !nuevasTareas[index].realizado;
    setTareasState(nuevasTareas);
  };

  return (
    <div>
      {tareasState.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          onToggle={() => toggleRealizado(index)}
        />
      ))}
    </div>
  );
};
export default ListaTareas;
