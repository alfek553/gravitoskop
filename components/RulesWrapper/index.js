import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
/**
 * Компонент `RulesWrapper` отображает страницу правил игры.
 */
const RulesWrapper = () => {

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Как управлять графиками</h1>
        <div className={styles.textContainer}>
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
          <Image className={styles.image + " " + styles.image_chart}
            src={`/image/rules/work_with_chart.jpg`}
            width={600}
            height={200}
            fill={false}
            alt='карточка5'
          />
                    <Image className={styles.image + " " + styles.image_title}
            src={`/image/rules/datePicker1.jpg`}
            width={300}
            height={400}
            fill={false}
            alt='карточка4'
          />
                    <Image className={styles.image + " " + styles.image_title}
            src={`/image/rules/datePicker2.jpg`}
            width={300}
            height={400}
            fill={false}
            alt='карточка3'
          />
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
          </p>
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
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