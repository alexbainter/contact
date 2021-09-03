import React from 'react';
import classes from './header.module.scss';

const LINK_URL = 'https://alexbainter.com';

const Header = () => (
  <div className={classes.header}>
    <a href={LINK_URL}>Alex Bainter</a>
  </div>
);

export default Header;
