import styles from './styles.module.scss';
import NavLink from '@/components/NavLink';

/**
 * Компонент `RightBlock` отображает правую часть шапки сайта с навигацией
*/
function RightBlock() {

  return (
    <nav className={styles.nav}>
      <ul
        className={styles.navList}
      >
        <li className={styles.listItem}>
          <NavLink text="График конденсатор" link="chart-capacitor" />
        </li>
        <li className={styles.listItem}>
          <NavLink text="График Холла" link="chart-holla" />
        </li>
      </ul>
    </nav>
  );
}

export default RightBlock;
