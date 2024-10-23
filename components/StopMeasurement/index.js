"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import CryptoJS from 'crypto-js';


const StopMeasurement = () => {
    const [isWork, setIsWork] = useState(null);  // Состояние для хранения текущего статуса измерений
    const url = new URL('http://xn--80auzl.xn--p1ai/Holla/EnableIndicator/postEnable.php');  // Ваш URL

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
        let result = prompt("Введите пароль");
        console.log(result);
        result = CryptoJS.SHA256(result);
        result = result.toString(CryptoJS.enc.Base64)
        if (result === "T9iC6Q9aZFto3C9Fqbd6xi5oWF7MyKLeWzNKOEIFzp4=") {
            // Отправляем POST запрос с данными
            fetch("/api/enable", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  url: url, // URL стороннего сервера
                  dataToSend: dataToSend,       // Параметр
                }),
              })
                .then(response => response.text())
                .then(data => {
                  console.log('Ответ:', data);
                  alert("Установлено");
                })
                .catch(error => {
                  console.error('Ошибка:', error);
                  alert("Ошибка установки");
                });
        } else {
            alert("Неверный пароль");
        }
    };

    // Пока статус не загружен, отображаем загрузку
    if (isWork === null) {
        return <div className={styles.load}>Загрузка...</div>;
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
