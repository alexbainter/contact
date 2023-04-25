import React from 'react';
import classes from './header.module.scss';

const PROFESSIONAL_LINK_CONTROL_PARAM_NAME = 'p';
const DEFAULT_LINK_URL = 'https://alexbainter.com';
const PROFESSIONAL_LINK_URL = 'https://alexbainter.dev';

const getLinkUrl = () =>
  window.location.search && new URLSearchParams(window.location.search).has('p')
    ? PROFESSIONAL_LINK_URL
    : DEFAULT_LINK_URL;

const Header = () => (
  <div className={classes.header}>
    <a href={getLinkUrl()}>Alex Bainter</a>
  </div>
);

export default Header;
