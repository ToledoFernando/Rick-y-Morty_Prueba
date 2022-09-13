import {Link} from 'react-router-dom';
import './navBar.css';

function NavBar(){
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">
                        <span className='span2'></span>
                        Inicio
                        <span className='span1'></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/personajes">
                        <span className='span2'></span>
                        Personajes
                        <span className='span1'></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/episodios">
                        <span className='span2'></span>
                        Episodios
                        <span className='span1'></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;