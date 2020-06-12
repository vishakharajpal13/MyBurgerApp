import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';

import Backdrop from '../../UI/Backdrop/Backdrop';

import Toggle from '../Toggelbar/Togglebar';
const sideDrawer = ( props ) => {

    let backdropcss=[classes.Close] ;



   if(props.openorclose) 
    {

        backdropcss=[classes.SideDrawer];

    }
return (
    <Aux>
        <Backdrop show ={props.openorclose} clicked={props.clicked}/>
       
    <div className={backdropcss}>
        <div className={classes.Logo}>
<Logo />
</div>
<div >
    <NavigationItems />
</div>

    </div>
    </Aux>
)

};

export default sideDrawer;