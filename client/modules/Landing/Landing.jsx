/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ChallengeText from './components/ChallengeText/ChallengeText';
import Process from './components/Process/Process';
import ChallengeGrid from './components/ChallengeGrid/ChallengeGrid';
import Sponsors from './components/Sponsors/Sponsors';

import styles from './Landing.scss';

import headerBg from './header-bg.png';

/**
 * Landing
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Landing() {
  return (
    <div className={styles.landing}>
      <Helmet
        title="Landing"
      />
      <Header
        backgroundImg={headerBg}
        headerText={'Design for the Future of San Diego'}
        subheaderText={'D4SD aims to engage San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. Our goal is to create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.'}
        showButton
      />
      <ChallengeText />
      <Process />
      <ChallengeGrid />
      <Sponsors />
      <Footer />
    </div>
  );
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
