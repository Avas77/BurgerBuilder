import React from 'react';
import './NavItem.css';
import {NavLink} from 'react-router-dom';

const navItem = (props) => {
    return(
        <li className = "NavigationItem">
            <NavLink to = {props.link} exact>{props.children}</NavLink>
        </li>
    )
}

export default navItem;