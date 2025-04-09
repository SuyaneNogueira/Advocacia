import React, { useState } from 'react';
import './Calendario.css';

function Calendario() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Função para obter os dias do mês
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // Navegar entre meses
  const changeMonth = (direction) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);

  // Obter o dia da semana do primeiro dia do mês
  const firstDayIndex = new Date(year, month, 1).getDay();

  return (
<div>

        <Navbar/>

    <div className="calendar" ><img src="folinhas.jpg" alt="" className="folinhas"/>
      {/* Cabeçalho do calendário */}
      <div className="header">
        <button onClick={() => changeMonth(-1)}>◀</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </h2>
        <button onClick={() => changeMonth(1)}>▶</button>
      </div>

      {/* Dias da semana */}
      <div className="days-of-week">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
            <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      {/* Dias do mês */}
      <div className="days">
        {/* Espaço para os dias antes do início do mês */}
        {Array.from({ length: firstDayIndex }).map((_, index) => (
            <div key={index} className="day empty"></div>
            ))}

        {/* Dias do mês */}
        {daysInMonth.map((date) => (
            <div key={date.toString()} className="day">
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}

export default Calendario;
