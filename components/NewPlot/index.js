'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

// Динамический импорт react-plotly.js с отключенным серверным рендерингом
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PlotComponent = () => {
  const [data, setData] = useState([]);  // Состояние для данных
  const [layout, setLayout] = useState({
    title: 'Показания маятника Ярковского',
    xaxis: { title: 'Время' },  // Добавляем слайдер диапазона
    yaxis: { title: 'Напряжение' },
    autosize: true,
  });

  const plotRef = useRef(null);  // Ссылка на график для сохранения состояния

  // Функция для получения данных с API и обновления графика
  const updatePlot = () => {
    fetch("/api/proxy")
      .then((response) => response.text())
      .then((data) => {
        let lines = data.split('\n');

        // Форматирование данных для отображения на графике
        const lastNLines = lines.slice(Math.max(lines.length - 30000, 0));

        const formattedData = lastNLines.map((line) => {
        // const formattedData = lines.map((line) => {
          const values = line.split(',');
          return { time: values[0], voltage: parseFloat(values[1]) };
        });

        setData(formattedData);
      })
      .catch((error) => console.error('Ошибка при обновлении графика:', error));
  };

  useEffect(() => {
    updatePlot();
    const intervalId = setInterval(updatePlot, 10000);  // Обновляем каждые 10 секунд
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Сохранение текущего масштаба
    const handleRelayout = (eventData) => {
      if (plotRef.current && eventData['xaxis.range[0]'] && eventData['xaxis.range[1]']) {
        setLayout((prevLayout) => ({
          ...prevLayout,
          xaxis: {
            ...prevLayout.xaxis,
            range: [eventData['xaxis.range[0]'], eventData['xaxis.range[1]']],
          },
          yaxis: {
            ...prevLayout.yaxis,
            range: [eventData['yaxis.range[0]'], eventData['yaxis.range[1]']],
          },
        }));
      }
    };

    if (plotRef.current) {
      plotRef.current.on('plotly_relayout', handleRelayout);
    }

    return () => {
      if (plotRef.current) {
        plotRef.current.removeListener('plotly_relayout', handleRelayout);
      }
    };
  }, []);

  return (
    <Plot
      ref={plotRef}  // Ссылка на график
      data={[
        {
          x: data.map((item) => item.time),
          y: data.map((item) => item.voltage),
          type: 'scattergl',  // Используем WebGL для ускорения
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={layout}
      useResizeHandler={true}
      style={{ width: '100%', height: '100%' }}
      config={{
        responsive: true,
        displayModeBar: true,  // Панель инструментов
        modeBarButtonsToAdd: ['zoom2d', 'pan2d', 'resetScale2d', 'autoScale2d'],
      }}
    />
  );
};

export default PlotComponent;
