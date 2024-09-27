import styles from './styles.module.scss';
import NavLink from '../NavLink';

const currentYear = new Date().getFullYear();

/**
 * Компонент `Footer` отображает футер сайта.
 */
async function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>© {currentYear} Kraisoft Limited.</span>
        <nav className={styles.nav} aria-label="Additional navigation">
          <ul
            className={styles.navList}
            aria-label="List of Additional Navigation Links"
          >
            <li className={styles.listItem}>
              <NavLink text="Privacy Policy" link="privacy" />
            </li>
            <li className={styles.listItem}>
              <NavLink text="Rules" link="rules" />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
