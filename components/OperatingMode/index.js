'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

const OperatingMode = ({ onModeChange }) => {
  const [isRealtime, setIsRealtime] = useState(true); // Режим по умолчанию - реального времени

  // Обработчик переключения режима
  const handleModeSwitch = (mode) => {
    setIsRealtime(mode === 'realtime');
    onModeChange(mode === 'realtime'); // Передаем значение родительскому компоненту
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
