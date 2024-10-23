'use client';
import styles from './styles.module.scss';
import CryptoJS from 'crypto-js';

/**
 * Компонент `Button` отображает кнопку для отправки данных на сервер.
 */
const Button = ({ text, url, parametr, urlParametr }) => {

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
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataToSend,
      })
        .then(response => {
          if (response.ok) {
            console.log('Данные успешно отправлены');
            alert("Установленно");
          } else {
            console.error('Ошибка при отправке данных:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Ошибка при отправке запроса:', error);
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
