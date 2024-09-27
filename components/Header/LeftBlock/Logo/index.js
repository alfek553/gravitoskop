import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

/**
 * Компонент `Logo` отображает контейнер с логотипом и заголовком страницы.
 */
function Logo() {

  return (
    <div className={styles.container}>
      <Link
        href={'/'}
        className={styles.link}
      >
        <Image
          src="/kraisoft-logo.svg"
          alt="kraisoft.com logo"
          width={23}
          height={23}
        />
        <span className={styles.logoText}>
          Test-<span className={styles.redText}>Task</span>
        </span>
      </Link>
    </div>
  );
}

export default Logo;
