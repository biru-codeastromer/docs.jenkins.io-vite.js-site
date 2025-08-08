import * as React from 'react';
import '@jenkinsci/jenkins-io-components/build/jio-components.esm.js';

const Header = () => {
  return (
    <div>
      <jio-navbar></jio-navbar>
    </div>
  );
};

export default Header;