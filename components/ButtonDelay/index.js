'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import Input from '../Input';

/**
 * Компонент `ButtonDelay` отображает поле ввода задержки с кнопкой для отправки данных на сервер.
 */
const ButtonDelay = () => {
  const [delay, setDelay] = useState(''); // Состояние для задержки

  const url = new URL(`http://xn--80auzl.xn--p1ai/Holla/TestcontrolDelayAndFreq.php`);  // Ваш URL

  return (
    <div className={styles.containerInput}>
      <Input
        text="Введите задержку"
        name="delay"
        delay={delay}
        setDelay={setDelay}
      />
      <Button
        text="установить"
        parametr={delay}
        urlParametr="delay"
        url={url}
        setParametr={setDelay}
      />
    </div>
  );
};

export default ButtonDelay;
