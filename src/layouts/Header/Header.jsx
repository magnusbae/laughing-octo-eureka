import React from 'react';
import EikaLogo from '../../static/eika.png';
import '../../styles/core.scss';
import classes from './Header.scss';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function Header () {
  return (
    <div className={classes.eikaHeader} >
      <img src={EikaLogo} alt='Eika logo' />
    </div>
  );
}

export default Header;
