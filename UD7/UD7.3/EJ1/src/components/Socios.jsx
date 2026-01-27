import { useEffect, useState } from "react";

function Socios() {
    //Listado general
    const [socios, setSocios] = useState([]);
    const [filtradosActividad, setFiltradosActividad] = useState([]);
    const [filtradosEdad, setFiltradosEdad] = useState([]);
    const [filtradosNivel, setFiltradosNivel] = useState([]);

    //Obtener datos iniciales de socios.json
    useEffect(() => {
        fetch("/socios.json")
            .then((res) => res.json())
            .then((datos) => setSocios(datos))
            .catch((err) => console.error(err));
    }, []);

    function filtrarActividad(e) {
        let resultado = [];
        if (e.target.value == "Todos") {
            resultado = socios;
        } else {
            resultado = socios.filter(
                (socio) => socio.Actividad == e.target.value,
            );
        }
        setFiltradosActividad(resultado);
    }

    function filtrarEdad(e) {
        let resultado = socios.filter((socio) => socio.Edad <= e.target.value);
        setFiltradosEdad(resultado);
    }

    function filtrarNivel(e) {
        let resultado = socios.filter((socio) => socio.Nivel == e.target.value);
        setFiltradosNivel(resultado);
    }

    function mostrarTodos() {
        return (
            <table border="1">
                <tbody>
                    {socios.map((socio) => (
                        <tr key={socio.Nombre}>
                            <td>{socio.Nombre}</td>
                            <td>{socio.Actividad}</td>
                            <td>{socio.Edad}</td>
                            <td>{socio.Nivel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <div>
                <select onChange={filtrarActividad}>
                    <option value="Yoga">Yoga</option>
                    <option value="Crossfit">Crossfit</option>
                    <option value="Natación">Natación</option>
                    <option value="Tenis">Tenis</option>
                </select>

                <button onClick={mostrarTodos}>Todos</button>
            </div>

            <div>
                <input
                    onChange={filtrarEdad}
                    type="number"
                    placeholder="Introduce una edad..."
                />
            </div>

            <div>
                <label>
                    <input type="radio" name="nivel" value="principiante" />
                    Principiante
                </label>
                <label>
                    <input type="radio" name="nivel" value="intermedio" />
                    Intermedio
                </label>
                <label>
                    <input type="radio" name="nivel" value="avanzado" />
                    Avanzado
                </label>
            </div>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Actividad</th>
                        <th>Edad</th>
                        <th>Nivel</th>
                    </tr>
                </tbody>
            </table>

            <table border="1">
                <tbody>
                    {filtradosActividad.map((socio) => (
                        <tr key={socio.Nombre}>
                            <td>{socio.Nombre}</td>
                            <td>{socio.Actividad}</td>
                            <td>{socio.Edad}</td>
                            <td>{socio.Nivel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border="1">
                <tbody>
                    {filtradosEdad.map((socio) => (
                        <tr key={socio.Nombre}>
                            <td>{socio.Nombre}</td>
                            <td>{socio.Actividad}</td>
                            <td>{socio.Edad}</td>
                            <td>{socio.Nivel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border="1">
                <tbody>
                    {filtradosNivel.map((socio) => (
                        <tr key={socio.Nombre}>
                            <td>{socio.Nombre}</td>
                            <td>{socio.Actividad}</td>
                            <td>{socio.Edad}</td>
                            <td>{socio.Nivel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Socios;

//Examen: formulario con y sin UseState. useState, useEffect, useStateAction
