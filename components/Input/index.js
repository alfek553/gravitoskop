'use client';
import styles from './styles.module.scss';


const Input = ({delay, setDelay, name, text}) => {

  return (
      <input
      className={styles.input}
        type="number"
        id={name}
        name={name}
        value={delay}
        min="1"
        max="1000000" // Ограничиваем ввод значениями от 1 до 10000
        placeholder={text}
        onChange={(e) => setDelay(e.target.value)} // Обновляем состояние при изменении ввода
      />
  );
};

export default Input;
