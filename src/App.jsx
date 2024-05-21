import { useState } from 'react'
import './App.css'
import { assets } from './assets/assets'
import { useEffect } from 'react';
import { cosas, textos } from './assets/textos';

function App() {
  const [timePassed, setTimePassed] = useState({ months: 0, days: 0});

  useEffect(() => {
    const startDate = new Date('2023-07-01');
    const updateCounter = () => {
      const currentDate = new Date();
      const totalDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;

      setTimePassed({ months, days });
    };
    updateCounter();

    const intervalId = setInterval(updateCounter, 1000 * 60 * 60 * 24); // Actualizar cada día
    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <>
    <div className="topBar">
      <img src={assets.helloKitySit} alt="" />
      <h1>PARA EL AMOR DE MI VIDA</h1>
      <img src={assets.moña} alt="" />
    </div>
    <div className="topbar-another">
      <p>01 / 07 / 2023</p>
      <p>Han pasado {timePassed.months} meses y {timePassed.days} días desde que estamos juntos. 💕</p>
    </div>
    <div className="carta">
      <h3>Para mi bella princesa. 👑</h3>
      <p>{textos.carta1}</p>
      <p>{textos.carta2}</p>
      <p>{textos.carta3}</p>
      <p>{textos.carta4}</p>
      <p>{textos.carta5}</p>
      <p>Con todo el amor, tu cuchurrumin. 🥰</p>
    </div>
    <div className="top-cosas">
      <h1>101 COSAS QUE AMO DE TI</h1>
      <ul>
      {cosas.slice(1).map((item, index) => (
          <li key={index + 1}>{index + 1} {item.texto}</li>
        ))}
      </ul>
    </div>
    <div className="final">
      <h1>TE AMO MI BEBEEEEEEEEE WUEJEJEJJE</h1>
      <img src={assets.imagen} alt="" />
    </div>
    </>
  )
}

export default App
