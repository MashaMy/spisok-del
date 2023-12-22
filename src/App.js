import './App.css';
import Image from './shopping.jpg';
import ImageTwo from './man.jpg';
import { GroseryList } from './GroseryList';


function App() {
  return (
    <div className='app'>
      <div className='conteiner'>
      <img src={ Image } width="200px" alt="shopping"/>
      </div>
      <div className='conteiner'>
      <h1> Список </h1>
      </div>
      <GroseryList />
      <div className='conteiner'>
      <img src={ ImageTwo } width="250px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
