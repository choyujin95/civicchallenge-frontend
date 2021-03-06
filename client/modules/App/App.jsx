import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

/**
 * App
 */

const propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function App({ children }) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Design San Diego"
        meta={[
          { charset: 'utf-8' },
          { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'keywords', content: '' },
          { name: 'author', content: '' },
          { name: 'robots', content: 'index, follow' },
          { name: 'revisit-after', content: '1 days' },
          { name: 'theme-color', content: '#2d324d' },
        ]}
        link={[
          { rel: 'author', href: '/humans.txt' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'manifest', href: '/manifest.json' },
          { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2d324d' },
        ]}
      />
      {children}
    </div>
  );
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;
App.defaultProps = defaultProps;

export default App;
