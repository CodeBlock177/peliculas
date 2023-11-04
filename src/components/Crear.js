import React, {useState} from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({listadoState, setListadoState}) => {
    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;



    const conseguirDatosForm = (e) =>
    {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
 
        let peli = 
        {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        console.log(peli);

        setPeliState(peli);

        if(listadoState != null)
        {
            setListadoState(elementos =>
                {
                    return [...elementos, peli];
                });
        }else{
            setListadoState(peli);
        }
        
        GuardarEnStorage("pelis", peli);
    }


  return (
    <div className="add">

        <h3 className="title">{tituloComponente}</h3>

        <strong>
        {(titulo && descripcion) && "has creado la pelicula: " + titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" id='titulo' placeholder="titulo" name='titulo'/>
            <textarea placeholder="descripcion" id='descripcion' name='descripcion'></textarea>
            <input type="submit" value="guardar" id='guardar'/>
        </form>
    </div>
  )
}
