'use client';
import styles from './styles.module.scss';
/**
 * Компонент `OperatingMode` отображает кнопки с режимом работы графика
 */
const OperatingMode = ({ isRealtime, onModeChange, onDateChange }) => {

  // Обработчик переключения режима
  const handleModeSwitch = (mode) => {
    onModeChange(mode === 'realtime'); // Передаем значение родительскому компоненту
    if (mode === 'realtime') {
      onDateChange(null, null); // Ощичаем календарь
    }
  };

  return (
    <div className={styles.containerInput}>
      <button
        className={`${styles.submit} ${isRealtime ? styles.active : styles.noActive}`}
        onClick={() => handleModeSwitch('realtime')}
      >
        Режим реального времени
      </button>
      <button
        className={`${styles.submit} ${!isRealtime ? styles.active : styles.noActive}`}
        onClick={() => handleModeSwitch('static')}
      >
        Статический режим
      </button>
    </div>
  );
};

export default OperatingMode;
