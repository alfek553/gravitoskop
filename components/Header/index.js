import styles from './styles.module.scss';
import LeftBlock from './LeftBlock';
import RightBlock from "./RightBlock";

/**
 * Компонент `Header` отображает главную шапку сайта.
 */
async function Header() {

  return (
    <header className={styles.container}>
      <LeftBlock />
      <RightBlock />
    </header>
  );
}

export default Header;
