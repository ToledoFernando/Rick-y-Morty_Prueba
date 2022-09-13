import {useState} from 'react';
import {useParams} from 'react-router-dom';
import getinfo from '../getInfo/info';
import './infopersonaje.css';

function InfoPersoajes(){
    const api = "https://rickandmortyapi.com/api/character/";
    const {id} = useParams();
    const [info, setInfo] = useState();
    
    if(!info){
        getinfo(api+id).then((e) =>{
            setInfo(e)
        })
    }

    return(
        <div className='infoComplete'>
            {!info ? <h1 className='Cargando'>Cargando...</h1> : 
            <div className='info'>
                <img src={info.image} alt={info.name} />
                <h1>{info.name}</h1>
                <p>Geneder: {info.gender}</p>
                <p>Specie: {info.species}</p>  
                <p>Location: {info.location.name}</p>
                <p>Origin: {info.origin.name}</p>
                <p>Episodios: {info.episode.length}</p>
                <p>URL : </p>
                <h4>{info.url}</h4>
            </div>} 
            
        </div>
    )
}


export default InfoPersoajes;