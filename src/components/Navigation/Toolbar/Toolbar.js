import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../Toggelbar/Togglebar';

const toolbar = ( props ) => (
   
    <header className={classes.Toolbar}>
        <Toggle click={props.click}/>
      <div>MENU</div>
        <div className={classes.Logo}>
            <div className={classes.Logo}>
            <Logo />
            </div>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
   
);

export default toolbar;