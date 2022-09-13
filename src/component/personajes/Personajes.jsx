import {useState} from 'react';
import getInfo from '../getInfo/info';
import { Link } from 'react-router-dom';
import './Personajes.css';

function Personajes(){
    const [api, setApi] =  useState("https://rickandmortyapi.com/api/character")
    const [personajes, setPersonajes] = useState();

    if(!personajes){
        getInfo(api).then((e)=>{
            setPersonajes(e)
        })
    }
    function ChangePage(e){
        setApi(e)
        setPersonajes('')
    }

    return(
        <div className='component-personajes'>
            {personajes ? 
            <div className="next-prev">
                <button className='prev' disabled={personajes.info.prev ? false : true} onClick={personajes.info.prev ? ()=> ChangePage(personajes.info.prev) : null}>Prev</button>
                <button className='next' disabled={personajes.info.next ? false : true} onClick={personajes.info.next ? ()=> ChangePage(personajes.info.next) : null}>Next</button>
            </div> : ''}
            <div className="task-personajes">
                {personajes ? 
                <div className='body-P'>
                    {personajes.results.map((e)=>{
                        return(
                            <Link className='personajeOp' key={e.id} to={`/info/${e.id}`}>
                                <div>
                                    <div className="imagen">
                                        <img src={e.image} alt=""/>
                                    </div>
                                    <h1>{e.name}</h1>
                                </div>
                            </Link>
                        )
                    })}
                </div> : <h1 className='Cargando'>Cargando...</h1> }
            </div>
        </div>
    )
}


export default Personajes;