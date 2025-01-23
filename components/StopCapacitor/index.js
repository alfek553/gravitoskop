"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import CryptoJS from 'crypto-js';


const StopCapacitor = (apiUrl) => {
    const [isWork, setIsWork] = useState(null);  // Состояние для хранения текущего статуса измерений
    const url = new URL('http://xn--80auzl.xn--p1ai/Capacitor/EnableIndicator/postEnable.php');  // Ваш URL

    const urlParametr = "enable";



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
            alert("Датчик не подключен");
        } else {
            alert("Неверный пароль");
        }
    };

    // // Пока статус не загружен, отображаем загрузку
    // if (isWork === null) {
    //     return <div className={styles.load}>Загрузка...</div>;
    // }

    return (
        <div className={styles.containerInput}>
            <button
                className={styles.submit}
                onClick={handleFormSubmit}  // Обработка клика
            >
                 Включить
            </button>
            <div
                className={styles.indicator}
                style={{
                    backgroundColor: isWork ? 'red' : 'red',  // Условное изменение фона
                    color: '#fff',  // Цвет текста
                }}
            >
                Измерения выключены
            </div>
        </div>
    );
}

export default StopCapacitor;
