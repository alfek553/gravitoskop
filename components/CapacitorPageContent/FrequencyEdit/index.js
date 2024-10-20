'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Input';

/**
 * Компонент `FrequencyEdit` отображает поле ввода частоты с кнопкой для отправки данных на сервер.
 */
const FrequencyEdit = () => {
  const [frequency, setFrequency] = useState(''); // Состояние для задержки

  const url = '/controlFreq.php'; // Замените на ваш URL

  return (
    <div className={styles.containerInput}>
      <Input
        text="Введите частоту"
        name="frequency"
        frequency={frequency}
        setfrequency={setFrequency}
      />
      <Button
        text="установить"
        parametr={frequency}
        urlParametr="freq"
        url={url}
      />
    </div>
  );
};

export default FrequencyEdit;
