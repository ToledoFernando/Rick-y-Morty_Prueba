import {useState} from 'react';
import {Link} from 'react-router-dom';
import {getOp} from './peticion';
import Personajes from './img/portada-Personajes.jpg';
import Lugares from './img/portada-lugares.jpg';
import capitulos from './img/porada-capitulos.jpg';
import './Principal.css';

function Principal(){


    const [opciones, setOpciones] = useState()

    if(!opciones) {
        getOp().then(re => setOpciones(re))
    }
    
    return(
        <div>
            {opciones ? 
            <div className='opciones'>
                <div className="personajes">
                    <Link to="/personajes">
                    <img src={Personajes} alt="Personajes" className='Personajes' />
                    Ver Personajes</Link>
                </div>
                <div className="lugares">
                    <Link to="/ubicaciones">
                    <img src={Lugares} alt="ubicaciones" className='Ubicaciones' />
                    Ver Ubicaciones</Link>
                </div>
                <div className="capitulos">
                    <Link to="/episodios">
                    <img src={capitulos} alt="episodios" className='Episodios' />
                    ver info  Episodios</Link>
                </div>
            </div> : <h1 className='Cargando'>Cargando...</h1>}
        </div>
    )
}

export default Principal;