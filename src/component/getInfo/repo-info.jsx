import icon from './github.png';
import './github.css';

function Repo(){
    return(
        <div className='cont'>
            <div>
                <a href="https://github.com/ToledoFernando/Rick_y_Morty-Prueba" target="_blank">Ver repositorio en GitHub</a><img src={icon} alt="github" />
            </div>
        </div>
    )
}

export default Repo;