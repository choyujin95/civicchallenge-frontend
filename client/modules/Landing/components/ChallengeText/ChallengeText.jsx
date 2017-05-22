/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './ChallengeText.scss';

/**
 * ChallengeText
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeText(props) {
  return (
    <section className={styles.challengeText} ref={props.componentRef}>
      <div className={styles.header}>
        <h3>
          <span className={styles.text1}>Civic Challenge:</span>
          <br />
          <span className={styles.text2}>Mobility</span>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
            </div>
          </div>
        </h3>
        <p className={styles.description}>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered design challenge around the complex civic issue of Mobility. People need to move around a city. Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the daily lives of millions. San Diego is culturally and economically diverse, as well as geographical dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility challenges below investigate concerns currently facing San Diegans, as well as take a look to future transportation systems.</p>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default withCollectRef('Challenges')(ChallengeText);
