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