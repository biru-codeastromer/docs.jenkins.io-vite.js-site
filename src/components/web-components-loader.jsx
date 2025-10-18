import React, { useEffect } from 'react';
import '@jenkinsci/jenkins-io-components/build/jio-components.esm.js';

const WebComponentsLoader = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.customElements) {
      import('@webcomponents/webcomponentsjs').then(() => {
        console.log('WebComponents polyfill loaded');
      });
    }

    const loadIonicons = () => {
      if (document.querySelector('script[data-stencil-namespace="ionicons"]')) {
        return;
      }

      const moduleScript = document.createElement('script');
      moduleScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.4.0/ionicons/ionicons.esm.js';
      moduleScript.type = 'module';
      moduleScript.defer = true;
      moduleScript.setAttribute('data-stencil-namespace', 'ionicons');
      
      const nomoduleScript = document.createElement('script');
      nomoduleScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.4.0/ionicons/ionicons.js';
      nomoduleScript.noModule = true;
      nomoduleScript.defer = true;
      nomoduleScript.setAttribute('data-stencil-namespace', 'ionicons');
      
      document.head.appendChild(moduleScript);
      document.head.appendChild(nomoduleScript);
    };

    const updateTheme = () => {
      const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.dataset.theme = dark ? 'dark' : '';
    };

    loadIonicons();

    updateTheme();
    
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    }

    return () => {
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
      }
    };
  }, []);

  return <>{children}</>;
};

export default WebComponentsLoader;
