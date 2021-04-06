import React from 'react';
import './Toggle.css';

const toggle = (props) => {
    return(
        <div onClick = {props.clicked} className = "DrawerToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default toggle;