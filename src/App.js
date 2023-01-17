import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className='designApp'>
      <div className='display'>{contador}</div>
      <div className='buttons'>
      <button onClick={()=> setContador(contador-1)}>-</button>
      <button onClick={()=> setContador(contador+1)}>+</button>
      </div>
      
      
    </div>
  );
}

export default App;
