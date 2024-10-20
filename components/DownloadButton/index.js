'use client';
import styles from './styles.module.scss';

/**
 * Компонент `DownloadButton` отображает кнопку для скачивания данных с сервера.
 */
const DownloadButton = () => {

  // Функция обработки отправки данных и скачивания файла
  const handleFormSubmit = async (event) => {
    event.preventDefault();  // Предотвращаем перезагрузку страницы

    try {
      // Отправляем запрос на сервер для скачивания файла
      const response = await fetch("/api/download");

      if (response.ok) {
        const blob = await response.blob();  // Получаем данные в виде Blob (байтовое представление файла)
        const url = window.URL.createObjectURL(blob);  // Создаем URL для файла
        const link = document.createElement('a');  // Создаем временную ссылку
        link.href = url;
        link.setAttribute('download', 'enable_status.txt');  // Устанавливаем имя файла для скачивания
        document.body.appendChild(link);
        link.click();  // Симулируем клик по ссылке для скачивания
        link.parentNode.removeChild(link);  // Удаляем ссылку после скачивания
      } else {
        console.error('Ошибка при скачивании файла:', response.statusText);
      }

    } catch (error) {
      console.error('Ошибка при получении файла:', error);
    }
  };

  return (
    <div className={styles.containerInput}>
      <button
        className={styles.submit}
        onClick={handleFormSubmit} // Вызываем функцию обработки
      >
        Скачать данные
      </button>
    </div>
  );
};

export default DownloadButton;
