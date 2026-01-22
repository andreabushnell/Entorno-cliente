import { useActionState } from 'react';

// 1. Definimos una "Acción": una función asíncrona que procesa los datos y que se va a ejecutar en el action
async function updateProfile(previousState, formData) {
  // formData es un objeto nativo del navegador con todos los campos del formulario devuelto por useActionState
  const username = formData.get("username");
  const edad= formData.get("edad");

  // Simulamos una validación o envío a base de datos
  if (edad < 18) {
    return { error: "Debes ser mayor de edad" };
  }

  return { success: true, message: `Hola ${username}, datos guardados!` };
}

function Formulario2() {
  // 2. useActionState recibe la función y un estado inicial
  const [state, formAction, isPending] = useActionState(updateProfile, null);

  return (
    <form action={formAction}> 
      <label>Enter your name:
        <input type="text" name="username" required />
      </label>

      <label>Enter your age:
        <input type="number" name="edad" required />
      </label>

      {/* 4. Gestionamos el estado de carga y errores fácilmente */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar"}
      </button>

      {state?.error && <p style={{color: 'red'}}>{state.error}</p>}
      {state?.success && <p style={{color: 'green'}}>{state.message}</p>}
    </form>
  );
}
export default Formulario2;