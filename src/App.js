import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './component/navbar/Navbar';
import Personajes from './component/personajes/Personajes';
import Principal from './component/pincipal/Principal';
import InfoPersoajes from './component/InfoPersonaje/InfoPersonaje';
import Ubicacion from './component/ubicaciones/ubicaciones';
import Episodes from './component/episodios/Episodios';
import gif from './component/portal.gif';
import Repo from './component/getInfo/repo-info';
import Rick from './Rick.png';
import Morty from './Morty.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />}/>
        <Route path="/personajes" element={<Personajes />}/>
        <Route path="/info/:id" element={<InfoPersoajes />}/>
        <Route path="/ubicaciones" element={<Ubicacion />} />
        <Route path="/episodios" element={<Episodes />} />
      </Routes>
      <Repo />
      <div className="anim">
        <img src={Rick} alt="Rick Sanchez" className='RickPNG'/>
        <img src={Morty} alt="Morty Smith" className='MortyPNG'/>
      </div>
        <img className='img' src={gif} alt="Portal Rick and Morty" />
    </div>
  );
}

export default App;
