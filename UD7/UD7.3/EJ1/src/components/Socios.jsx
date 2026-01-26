import { useEffect, useState } from 'react';

function Socios() {
    let socios = fetch('').then(res => res.text()).then(y => JSON.parse(y));

    const[todos, setSocios] = useState(socios);
    const[filtrados, setFiltrados] = useState(socios);

    function filtrarEdad(e){
        const sociosFiltrados = todos.filter(socio => socio.edad >= e.target.value);
        setFiltrados(sociosFiltrados);
    }

    function filtrarActividad(e){
        const sociosFiltrados = todos.filter(socio => socio.actividad === e.target.value);
        setFiltrados(sociosFiltrados);
    }

    return(
        <div>
            <table border="1">
                {filtrados.map(socio => (
                    <tr key={socio.nombre}>
                        <td>{socio.nombre}</td>
                        <td>{socio.edad}</td>
                    </tr>
                ))}
            </table>
            <select value='Selecciona' onChange={filtrarActividad}>

            </select>
            </div>
    )
}

export default Socios;