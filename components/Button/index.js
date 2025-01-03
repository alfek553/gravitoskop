'use client';
import styles from './styles.module.scss';
import CryptoJS from 'crypto-js';

/**
 * Компонент `Button` отображает кнопку для отправки данных на сервер.
 */
const Button = ({ text, url, parametr, urlParametr, setParametr }) => {

  // Функция обработки отправки данных
  const handleFormSubmit = () => {
    if (!parametr) {
      return;
    }
    let result = prompt("Введите пароль");
    console.log(result);
    result = CryptoJS.SHA256(result);
    result = result.toString(CryptoJS.enc.Base64)
    if (result === "T9iC6Q9aZFto3C9Fqbd6xi5oWF7MyKLeWzNKOEIFzp4=") {

      const dataToSend = `${urlParametr}=${parametr}`; // Формируем данные для отправки
      console.log('Отправляем:', dataToSend);

      // Отправляем POST запрос с данными
      fetch('/api/changeDelayorFreq', {
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
          setParametr(0);
          alert("Установлено");

        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert("Ошибка установки");
        });
    }
    else {
      alert("Неверный пароль");
    }
  };

  return (
    <button
      className={styles.submit}
      onClick={handleFormSubmit} // Вызываем функцию обработки
    >
      {text}
    </button>
  );
};

export default Button;
