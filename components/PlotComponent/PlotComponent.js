'use client';
// components/PlotComponent.js
import { useEffect } from 'react';
const PlotComponent = () => {
    useEffect(() => {
    // Загрузка библиотеки Plotly с CDN
    const loadPlotly = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
    script.async = true;
    script.onload = initializePlot; // Инициализация графика после загрузки скрипта
    document.body.appendChild(script);
    };
    
    const initializePlot = () => {
    let trace = {
    x: [],
    y: [],
    line: { color: '#1f77b4' },
    mode: 'lines+markers',
    type: 'scatter',
    };
    
    let layout = {
    title: 'Показания маятника Ярковского',
    xaxis: {
    range: ['2023-03-27 14:00:59', Date()],
    title: 'Время',
    },
    yaxis: {
    range: [300, 1500],
    title: 'Напряжение',
    },
    };
    
    // Создаем начальный график
    Plotly.newPlot('plot', [trace], layout);
    
    // Функция для обновления данных на графике
    const updatePlot = () => {
    fetch('https://xn--80auzl_xn--p1ai.regruproxy.ru/Holla/data_holla.txt')
    .then((response) => response.text())
    .then((data) => {
    let lines = data.split('\n');
    
    // Выбираем последние 100 строк (если строк меньше, то берем все)
    const lastNLines = lines.slice(Math.max(lines.length - 100, 0));
    
    let x = [], y = [];
    for (let i = 0; i < lastNLines.length; i++) {
    let values = lastNLines[i].split(',');
    x.push(values[0]); // Значения для оси X
    y.push(values[1]); // Значения для оси Y
    }
    
    Plotly.update('plot', {
    x: [x],
    y: [y],
    });
    });
    };
    
    // Обновляем график каждые 2 секунды
    setInterval(updatePlot, 2000);
    };
    
    loadPlotly();
    }, []);
    
    return <div id="plot" style={{ width: '100%', height: '100%' }} />;
    };
    
    export default PlotComponent;