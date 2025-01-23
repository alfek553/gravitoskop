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
          <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
            nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
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