import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);

    useEffect(() =>
    {
        console.log('componentes del listado de peliculas cargado!!');
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () =>
    {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        peliculas === null ? setListadoState([]) : setListadoState(peliculas);
    }

  return (
    <>
    {listadoState != null ? listadoState.map(peli => {
        return (
            <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            {console.log("ya hay peliculas")}
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
        )
    })
    : <h2 className='aviso'>Listado vacio sapo hijo de puta</h2>
}
    
    </>
  )
}
