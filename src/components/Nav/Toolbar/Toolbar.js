import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Toggle from '../Sidebar/Toggle/Toggle';

const navigation = (props) => {
    return (
        <header className = "Toolbar">
            <Toggle clicked = {props.open} />
            <Logo height = "80%" />
            <nav className = "DesktopOnly">
                <NavItems />
            </nav>
        </header>
        
    );
}

export default navigation;