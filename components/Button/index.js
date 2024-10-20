'use client';
import styles from './styles.module.scss';

/**
 * Компонент `Button` отображает кнопку для отправки данных на сервер.
 */
const Button = ({ text, url, parametr, urlParametr }) => {

  // Функция обработки отправки данных
  const handleFormSubmit = () => {
    if (!parametr) {
      return;
    }

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
      } else {
        console.error('Ошибка при отправке данных:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
    });
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
