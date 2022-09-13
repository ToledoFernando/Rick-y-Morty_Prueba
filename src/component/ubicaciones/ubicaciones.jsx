import { useState } from 'react';
import getInfo from '../getInfo/info';
import './ubicaciones.css';

function Ubicacion(){

    const [api, setApi] =  useState("https://rickandmortyapi.com/api/location");

    const [Lista, setLista] = useState();

    if(!Lista){
        getInfo(api).then((e)=>{
            setLista(e)
        })
    }

    function ChangePage(e){
        setApi(e)
        setLista('')
    }

    return(
        <div className='component-Lista'>
            {Lista ? 
            <div className="next-prev">
                <button className='prev2' disabled={Lista.info.prev ? false : true} onClick={Lista.info.prev ? ()=> ChangePage(Lista.info.prev) : null}>Prev</button>
                <button className='next2' disabled={Lista.info.next ? false : true} onClick={Lista.info.next ? ()=> ChangePage(Lista.info.next) : null}>Next</button>
            </div> : ''}
            <div className="task-Lista">
                {Lista ? 
                <div className='body-L'>
                    {Lista.results.map((e)=>{
                        return(
                            <div key={e.id}>
                                <p className='U-Title'>{e.name}</p>
                                <p>Dimencion: {e.dimension}</p>
                                <p>Residente: {e.residents.length}</p>
                                <p>Type: {e.type}</p>
                            </div>
                            )
                        })}    
                </div> : <h1 className='Cargando'>Cargando...</h1> }
            </div>
        </div>
    )
}


export default Ubicacion;