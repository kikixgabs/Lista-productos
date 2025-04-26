import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const ManejadorBoton = () => {
    if (item.trim() !== '') {  // Así evitás agregar espacios vacíos
      setLista([...lista, item]);
      setItem(''); // Limpia el input después de cargar
    }
  };

  const eliminarItem = (index) => {
    // Filtra el item a eliminar y actualiza la lista
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };
  

  return (
    <>
      "🛒🛒"
      <input placeholder='Ingresa el item' value={item} onChange={(e) => setItem(e.target.value)}></input><br/>
      <button onClick={ManejadorBoton}>Cargar item</button>
      <ul>
  {lista.map((producto, index) => (
    <li key={index} className="item">
      {producto} 
      <button className="eliminar-btn" onClick={() => eliminarItem(index)}>Eliminar</button>
    </li>
  ))}
</ul>


    </>
  )
}

export default App
