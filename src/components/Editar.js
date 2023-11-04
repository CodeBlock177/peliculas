import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
    const tituloComponente = 'Editar Pelicula'

    const guardarEdicion = (e, id) =>
    {
        e.preventDefault();

        let datos = e.target;

        const peliculasAlmacenadas = conseguirPeliculas();
        const indice = peliculasAlmacenadas.findIndex(peli => peli.id === id);

        let peliculasActualizadas =
        {
            id,
            titulo: datos.titulo.value,
            descripcion: datos.descripcion.value
        }

        //actualizar el elemento con ese indice

        peliculasAlmacenadas[indice] = peliculasActualizadas;

        localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));

        setListadoState(peliculasAlmacenadas);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{tituloComponente}</h3>

        <form onSubmit={ e=> guardarEdicion(e, peli.id) }>
            <input
                type="text"
                name="titulo"
                className="titulo_editado"
                defaultValue={peli.titulo}
            ></input>

            <textarea
                name="descripcion"
                defaultValue={peli.descripcion}
                className="descripcion_editada"
            ></textarea>

            <input type="submit" className="editar" value="actualizar"></input>

        </form>
    </div>
  )
}
