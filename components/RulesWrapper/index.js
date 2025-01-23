import styles from './styles.module.scss';
import Link from 'next/link';

/**
 * Компонент `RulesWrapper` отображает страницу правил игры.
 */
const RulesWrapper = () => {

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Как управлять графиками</h1>
        <div className={styles.textContainer}>
        <Image className={styles.image + " "+ styles.image_title}
                            src={`/image/rules/work_with_chart.png`}
                            width={405}
                            height={500}
                            fill={false}
                            alt='карточка'
                        />
          <p className={styles.textContent}>
            График имеет различные функции: 
          </p>
          <p className={styles.textContent}>
            1. Скачать текущее изображение
          </p>
          <p className={styles.textContent}>
            2. функция zoom
          </p>
          <p className={styles.textContent}>
            3. функция перемещения
          </p>
          <p className={styles.textContent}>
            4. функция выбора прямоугольной области
          </p>
          <p className={styles.textContent}>
            5. функция выбора произвольной области
          </p>
          <p className={styles.textContent}>
            6. функция увеличение zoom
          </p>
          <p className={styles.textContent}>
            7. функция отдаление zoom
          </p>
          <p className={styles.textContent}>
            8. функция автоскейил
          </p>
          <p className={styles.textContent}>
            9. функция удаления точек
          </p>
          <p className={styles.textContent}>
            10. переход на сайт библиотеки
          </p>
          <p className={styles.textContent}>
            Панель для управления графиком включает:    
          </p>
          <p className={styles.textContent}>
            1. Возможность выбрать определенный диапозон дат
          </p>
          <Image className={styles.image + " "+ styles.image_title}
                            src={`/image/rules/datePicker1.png`}
                            width={405}
                            height={500}
                            fill={false}
                            alt='карточка'
                        />
                                  <p className={styles.textContent}>
            При этом список доступных дат будет отображаться зеленым
          </p>
          <Image className={styles.image + " "+ styles.image_title}
                            src={`/image/rules/datePicker2.png`}
                            width={405}
                            height={500}
                            fill={false}
                            alt='карточка'
                        />
          <p className={styles.textContent}>
            Для того чтобы вернуться к текущим измерением необходимо нажать на кнопку "Очистить даты"
          </p>
          <p className={styles.textContent}>
            2. Возможность изменить режим измерений. Врежиме реально времени данные будут показываться за последние 4 дня и будут обновляться при получении новых измерений.
            В сатическом режиме график обновляться не будет.
          </p>
        </div>
      </section>

      <div className={styles.linksContainer}>
        <Link
          href={"/"}
          className={styles.link}
        >
          На главную
        </Link>
      </div>
    </div>

  );
};

export default RulesWrapper;