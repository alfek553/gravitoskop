'use client';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]); // Даты, в которых есть данные

  // Функция для форматирования даты в формат YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // Функция для загрузки доступных дат
  const fetchAvailableDates = async () => {
    try {
      const response = await fetch( "/api/proxy?source=holla&availableDates=true"); // URL API, который возвращает массив дат
      const dates = await response.json(); // Ожидаем массив строк в формате YYYY-MM-DD
      // const dates = ["2024-12-22","2024-12-23","2024-12-24"];
      console.log("dates ",dates);
      const parsedDates = dates.map((date) => new Date(date)); // Преобразуем строки в объекты Date
      setAvailableDates(parsedDates);
    } catch (error) {
      console.error('Ошибка при загрузке доступных дат:', error);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, []); // Загружаем доступные даты при монтировании компонента

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date);
      onDateChange(formatDate(date), formatDate(endDate));
    } else {
      setEndDate(date);
      onDateChange(formatDate(startDate), formatDate(date));
    }
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    onDateChange(null, null);
  };

  return (
    <div className={styles.containerInput}>
      <div className={styles.calendar}>
        <label>Начальная дата:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date, true)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          highlightDates={availableDates} // Подсвечиваем доступные даты
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className={styles.calendar}>
        <label>Конечная дата:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange(date, false)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          highlightDates={availableDates} // Подсвечиваем доступные даты
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button className={styles.submit} onClick={clearDates}>
        Очистить даты
      </button>
    </div>
  );
};

export default DateRangePicker;
