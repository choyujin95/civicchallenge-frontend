import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Header.scss';

/**
 * Constants
 */

// TODO: Make homepage links scroll to correct area
const LINKS = [
  {
    href: '/challenges',
    text: 'Challenges',
  },
  {
    href: '/',
    text: 'About',
  },
  {
    href: '/',
    text: 'Sponsors',
  },
];


/**
 * Header
 */

const propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Header({ backgroundImg, headerText, subheaderText, showButton }, { router }) {
  return (
    <header className={styles.header}>
      <div
        className={styles.background}
      />
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/">D4SD</Link>
        </div>
        <nav className={styles.navbar}>
          {LINKS.filter(({ href }) => href === router.location.pathname).map(({ href, text }) =>
            <Link className={styles.active} key={text} to={href}>{text}</Link>
          )}
          {LINKS.filter(({ href }) => href !== router.location.pathname).map(({ href, text }) =>
            <Link key={text} to={href}>{text}</Link>
          )}
        </nav>
      </div>
      <div className={styles.textContainer}>
        <section className={styles.text}>
          {headerText && <h1>{headerText}</h1>}
          {subheaderText && <p className={styles.description}>{subheaderText}</p>}
          {showButton && <div className={styles.buttonContainer}>
            <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
          </div>}
        </section>
      </div>
      {backgroundImg && <img src={backgroundImg} alt="Background" />}
    </header>
  );
}

Header.propTypes = propTypes;
Header.contextTypes = contextTypes;
Header.defaultProps = defaultProps;

export default Header;
