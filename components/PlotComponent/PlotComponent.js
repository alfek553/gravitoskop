'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Динамический импорт react-plotly.js с отключенным серверным рендерингом
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PlotComponent = () => {
  const [data, setData] = useState([]);
  
  // Функция для получения данных с API и обновления графика
  const updatePlot = () => {
    fetch('/data/processed_data.txt')
      .then((response) => response.text())
      .then((data) => {
        let lines = data.split('\n');
        
        // const lastNLines = lines.slice(Math.max(lines.length - 120000, 60000));
        const lastNLines = lines.slice(0, 60000);
        const formattedData = lastNLines.map((line) => {
          const values = line.split(',');
          return { time: values[0], voltage: parseFloat(values[1]) };
        });

        setData(formattedData);
      })
      .catch((error) => console.error('Ошибка при обновлении графика:', error));
  };

  useEffect(() => {
    updatePlot();
    const intervalId = setInterval(updatePlot, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Plot
      data={[
        {
          x: data.map((item) => item.time),
          y: data.map((item) => item.voltage),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{
        title: 'Показания маятника Ярковского',
        xaxis: { title: 'Время' },
        yaxis: { title: 'Напряжение' },
        autosize: true,
      }}
      useResizeHandler={true}
      style={{ width: '100%', height: '100%' }}
      config={{
        responsive: true,
        displayModeBar: true, // Показывает панель инструментов
        modeBarButtonsToAdd: ['zoom2d', 'pan2d', 'resetScale2d', 'autoScale2d'],
      }}
    />
  );
};

export default PlotComponent;
