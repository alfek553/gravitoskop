'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

/**
 * Компонент `ButtonDelay` отображает поле ввода задержки с кнопкой для отправки данных на сервер.
 */
const Button = ({text,url,parametr,urlParametr}) => {

  // Функция обработки отправки данных
  const handleFormSubmit = async (url, parametr,urlParametr) => {
    if (!parametr) {
      return;
    }
  
    const dataToSend = `${urlParametr}=${parametr}`; // Формируем данные для отправки
    console.log('Отправляем:', dataToSend);
  
    try {
      // Отправляем POST запрос с данными
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataToSend,
      });
  
      if (response.ok) {
        console.log('Данные успешно отправлены');
      } else {
        console.error('Ошибка при отправке данных:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  

  return (
    <button 
    className={styles.submit} 
    onClick={() => handleFormSubmit(url, parametr,urlParametr)} // Передаем url и delay как аргументы
  >
    {text}
  </button>
  );
};

export default Button;
