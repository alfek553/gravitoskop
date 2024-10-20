"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const StopMeasurement = () => {
    const [isWork, setIsWork] = useState(null);  // Состояние для хранения текущего статуса измерений
    const url = new URL('http://xn--80auzl.xn--p1ai/EnableIndicator/getEnable.php');  // Ваш URL
    const testurl = '/controlFreq.php';  // Ваш URL
    const urlParametr = "enable";

    // Загрузка начального состояния с сервера при загрузке страницы
    useEffect(() => {
        fetch("/api/enable") // Замените на реальный URL к файлу
            .then(response => response.text())
            .then(status => {
                setIsWork(status.trim() === "true");
            })
            .catch(error => {
                console.error('Ошибка при получении начального состояния:', error);
            });
    }, []);

    // Функция обработки отправки данных
    const handleFormSubmit = () => {
        const newStatus = !isWork;  // Переключаем состояние
        const dataToSend = `${urlParametr}=${newStatus ? "true" : "false"}`;  // Формируем данные для отправки
        console.log('Отправляем:', dataToSend);

        // Отправляем POST запрос с данными
        fetch(testurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: dataToSend,
        })
        .then(response => {
            if (response.ok) {
                console.log('Данные успешно отправлены');
                setIsWork(newStatus);  // Обновляем состояние на основе отправленных данных
            } else {
                console.error('Ошибка при отправке данных:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    };

    // Пока статус не загружен, отображаем загрузку
    if (isWork === null) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className={styles.containerInput}>
            <button
                className={styles.submit}
                onClick={handleFormSubmit}  // Обработка клика
            >
                {isWork ? "Остановить" : "Включить"}
            </button>
            <div
                className={styles.indicator}
                style={{
                    backgroundColor: isWork ? 'green' : 'red',  // Условное изменение фона
                    color: '#fff',  // Цвет текста
                }}
            >
                {isWork ? "Измерение включено" : "Измерения выключены"}
            </div>
        </div>
    );
}

export default StopMeasurement;
