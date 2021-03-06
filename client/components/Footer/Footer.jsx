/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';

import styles from './Footer.scss';

// import designLabLogo from './design-lab-logo.png';
// import designForwardLogo from './design-forward-logo.png';
// import protolabLogo from './protolab-logo.png';

/**
 * Constants
 */

const START_YEAR = 2017;

/*
const LOCAL_LINKS = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/sponsors',
    text: 'Sponsors',
  },
  {
    href: '/team',
    text: 'Team',
  },
];

const AFFILIATE_LINKS = [
  {
    href: 'http://designlab.ucsd.edu/',
    src: designLabLogo,
    alt: 'UC San Diego Design Lab',
  },
  {
    href: 'https://designforwardsd.com/',
    src: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
  {
    href: 'http://protolab.ucsd.edu/',
    src: protolabLogo,
    alt: 'Protolab',
  },
];
*/


/**
 * Footer
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

// function Footer(props, { router }) {
function Footer() {
  const currentYear = (new Date()).getFullYear();
  const copyrightYear = START_YEAR === currentYear ? currentYear : `${START_YEAR}-${currentYear}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright &copy; {copyrightYear} D4SD. All Rights Reserved. The D4SD platform is under construction and subject to change.</div>
    </footer>
  );

  /*
      <div className={styles.name}>D4SD</div>
      <div className={styles.navigate}>
        <h4>Navigate</h4>
        <nav>
          {LOCAL_LINKS.filter(({ href }) => href !== router.location.pathname).map(({ href, text }) =>
            <Link key={text} to={href}>{text}</Link>
          )}
        </nav>
      </div>
      <div className={styles.affiliates}>
        <h4>Affiliates</h4>
        <nav>
          {AFFILIATE_LINKS.map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={alt} />
            </a>
          ))}
        </nav>
      </div>
  */
}

Footer.propTypes = propTypes;
Footer.contextTypes = contextTypes;
Footer.defaultProps = defaultProps;

export default Footer;
