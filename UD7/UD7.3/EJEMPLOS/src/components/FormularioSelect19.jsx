import { useActionState } from 'react';

async function handleForm(prevState, formData) {
  const car = formData.get("myCar");
  return `Has seleccionado un ${car}`;
}

function FormularioSelect19() {
  const [state, formAction] = useActionState(handleForm, "");

  return (
    <form action={formAction}>
      {/* 1. Usamos name para identificarlo en la acción.
        2. Usamos defaultValue para marcar el valor inicial (el "selected" de React).
        3. Ya no necesitamos onChange ni value={myCar}.
      */}
      <select name="myCar" defaultValue="Volvo">
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      <button type="submit">Enviar</button>
      <p>{state}</p>
    </form>
  );
}
export default FormularioSelect19;