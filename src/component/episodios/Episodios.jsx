import getInfo from "../getInfo/info";
import {useState} from 'react';
import './Episodios.css';


function Episodes(){
    
    const [api, setApi] = useState("https://rickandmortyapi.com/api/episode");
    const [lista, setLista] = useState();

    if(!lista){
        getInfo(api).then((e)=>{
            setLista(e)
        })
    }

    function ChangePage(e){
        setApi(e)
        setLista('')
    }
    return(
        <div>
            {lista ? 
            <div>
                <div className="next-prev">
                    <button className='prev2' disabled={lista.info.prev ? false : true} onClick={lista.info.prev ? ()=> ChangePage(lista.info.prev) : null}>Prev</button>
                    <button className='next2' disabled={lista.info.next ? false : true} onClick={lista.info.next ? ()=> ChangePage(lista.info.next) : null}>Next</button>
                </div>
                <div className="Lista">
                    {lista.results.map((e)=>{
                        return (<div key={e.id}>
                            <h3>{e.name}</h3>
                            <p>Estreno: {e.air_date}</p>
                            <p>Personajes: {e.characters.length}</p>
                            <p>Episodio: {e.episode}</p>
                        </div>)
                    })}
                </div>
            </div> 
             : <h1 className='Cargando'>Cargando...</h1> }
        </div>
    )
}

export default Episodes;