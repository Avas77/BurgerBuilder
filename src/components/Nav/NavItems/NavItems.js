import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
    return(
        <ul className = "NavigationItems">
            <NavItem link = "/" active>BurgerBuilder</NavItem>
            <NavItem link = '/orders'>My Orders</NavItem>
        </ul>
    );
}

export default navItems;