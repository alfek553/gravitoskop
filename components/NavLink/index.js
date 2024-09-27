'use client';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';

/**
 * Компонент `NavLink` отображает ссылку.
 * @property {string} text - Текст ссылки.
 * @property {string} link - Ссылка.
 */
function NavLink({ text, link }) {

  return (
    <Link
      href={"/" + link}
      className={styles.link}
    >
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default NavLink;
