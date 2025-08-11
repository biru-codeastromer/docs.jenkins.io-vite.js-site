import React, { useEffect } from 'react';
import '@jenkinsci/jenkins-io-components/build/jio-components.esm.js';

const WebComponentsLoader = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.customElements) {
      import('@webcomponents/webcomponentsjs').then(() => {
        console.log('WebComponents polyfill loaded');
      });
    }
  }, []);

  return <>{children}</>;
};

export default WebComponentsLoader;
