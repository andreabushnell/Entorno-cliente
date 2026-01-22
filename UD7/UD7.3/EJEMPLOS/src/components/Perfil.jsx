import { useActionState } from 'react';

// 1. La lógica del formulario (La "Acción") , podría ser una petición asíncrona Fetch al servidor

async function cambiarNombre(estadoAnterior, formData) {
// formData.get("nuevoNombre") busca el input con el atributo name="nuevoNombre" del objeto estándar del navegador formData
// Aquí podrías enviar el nombre a una base de datos o pedirlo al servidor
  const nombre = formData.get("nuevoNombre"); 

// Este valor se convertirá en el nuevo "state" 
 if (nombre === "admin") {
    return { error: "Ese nombre está prohibido", success: false };
  }
  
  return { mensaje: `¡Nombre ${nombre} guardado!`, success: true };
}

function Perfil() {
  // 2. Usamos el Hook
  const [state, formAction, isPending] = useActionState(cambiarNombre, { mensaje: "Introduce un nombre" });

  return (
    <form action={formAction}>
      <input type="text" name="nuevoNombre" />
      
      {/* 3. isPending nos dice si estamos esperando a la "API" */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Guardando..." : "Actualizar"}
      </button>

      {/* 4. state guarda lo que devolvió la función cambiarNombre */}
      <p style={{ color: state.success ? 'green' : 'red' }}>
        {state.mensaje || state.error}
      </p>
    </form>
  );
}

export default Perfil;