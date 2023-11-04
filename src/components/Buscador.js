import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeliculas = (e) =>
  {
    setBusqueda(e.target.value);

    let peliculasEncontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    })

    if(busqueda.length <= 1 || peliculasEncontradas <= 0)
    {
      peliculasEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    if(peliculasEncontradas <= 0)
    {
      peliculasEncontradas = JSON.parse(localStorage.getItem("pelis"));
    }

    setListadoState(peliculasEncontradas);
  }

  return (
    <div className="search">
        <h3 className="title">buscador</h3>
        {(noEncontrado === true && busqueda.length > 1) &&(
          <span className='aviso'>No hay resultado de su busqueda</span>
        )}
        
        <form>
            <input type="text" 
                  id='search_field'
                  name='busqueda'
                  autoComplete='off'
                  value={busqueda}
                  onChange={ buscarPeliculas }
            />
            <button id='search'>Buscar</button>
        </form>
    </div>
  )
}
