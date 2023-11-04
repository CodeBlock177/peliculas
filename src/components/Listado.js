import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

     const [editar, setEditar] = useState(0);

    useEffect(() =>
    {
        console.log('componentes del listado de peliculas cargado!!');
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () =>
    {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        peliculas === null ? setListadoState([]) : setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeliculas = (id) =>
    {
        let peliculasAlmacenadas = conseguirPeliculas();

        let nuevoListadoPeliculas = peliculasAlmacenadas.filter(peli => peli.id !== parseInt(id))

        setListadoState(nuevoListadoPeliculas);

        localStorage.setItem("pelis", JSON.stringify(nuevoListadoPeliculas));

        return peliculasAlmacenadas;
    }

  return (
    <>
    {listadoState !== null ? listadoState.map(peli => {
        return (
            <article key={peli.id} className="peli-item">

            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            {console.log("ya hay peliculas")}
            <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
            <button className="delete" onClick={ () => borrarPeliculas(peli.id)}>Borrar</button>

            {/* {esto aparece solo cuando precionamos editar} */}

            {
                editar === peli.id && (
                    <Editar peli={peli}
                     conseguirPeliculas={conseguirPeliculas}
                     setEditar={setEditar}
                     setListadoState={setListadoState}
                    />   
                )
            }

        </article>
        )
    })
    : <h2 className='aviso'>Listado vacio sapo hijo de puta</h2>
}
    
    </>
  )
}
