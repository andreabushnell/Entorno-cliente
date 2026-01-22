import './App.css'
import Perfil from'./components/Perfil'
import Formulario2 from './components/Formulario2'
import FormularioSelect from './components/FormularioSelect'
import FormularioSelect19 from './components/FormularioSelect19'
import PedirDatos from './components/PedirDatos'
import ListaTareas from './components/ListaTareas'

function App() {
  let datos = [
        {texto : "Comprar el pan", realizado : false},
        {texto : "Repostar", realizado: false}, 
        {texto : "Bajar la ropa", realizado : false}
      ];

  return (
    <>
    <h1>Perfil de usuario</h1>
      <Perfil/>
      <Formulario2/>
      <FormularioSelect/>
      <FormularioSelect19/>
      <PedirDatos/>
      <ListaTareas tareas={ datos }/>
    </>
  )
}

export default App
