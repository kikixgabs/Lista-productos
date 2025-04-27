import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  // Cargar lista desde localStorage al iniciar la app
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('listaDeTareas'));
    if (savedList) {
      setLista(savedList);
    }
  }, []);

  // Guardar la lista en localStorage cada vez que se actualiza
  useEffect(() => {
    localStorage.setItem('listaDeTareas', JSON.stringify(lista));
  }, [lista]);

  const ManejadorBoton = () => {
    if (item) {
      setLista([...lista, item]);
      setItem('');
    }
  };

  const eliminarItem = (itemToRemove) => {
    setLista(lista.filter((item) => item !== itemToRemove));
  };

  return (
    <>
      <input 
        placeholder="Ingresa el item" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
      />
      <button onClick={ManejadorBoton}>Cargar item</button>
      
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarItem(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
