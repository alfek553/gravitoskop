'use client';
// components/PlotComponent.js
import { useEffect, useState } from 'react';

const PlotComponent = () => {
    const [plotlyLoaded, setPlotlyLoaded] = useState(false);

    useEffect(() => {
        const loadPlotly = () => {
            // Проверяем, не загружен ли Plotly уже
            if (!window.Plotly) {
                const script = document.createElement('script');
                script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
                script.async = true;
                script.onload = () => {
                    setPlotlyLoaded(true); // Устанавливаем флаг после загрузки Plotly
                    initializePlot();
                };
                document.body.appendChild(script);
            } else {
                setPlotlyLoaded(true); // Если Plotly уже загружен, устанавливаем флаг
                initializePlot();
            }
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
                    range: ['2023-03-27 14:00:59', '2024-03-27 14:00:59'],
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
                console.log("запрос")
                fetch("/api/proxy")
                    .then((response) => response.text())
                    .then((data) => {
                        let lines = data.split('\n');

                        // Выбираем последние 100 строк (если строк меньше, то берем все)
                        const lastNLines = lines.slice(Math.max(lines.length - 10000, 0));

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

            // Обновляем график каждые 10 секунд
            const intervalId = setInterval(updatePlot, 10000);

            // Очищаем интервал при размонтировании компонента
            return () => clearInterval(intervalId);
        };

        // Загружаем Plotly и инициализируем график
        loadPlotly();
    }, []);

    return <div id="plot" style={{ width: '100%', height: '100%' }} />;
};

export default PlotComponent;
