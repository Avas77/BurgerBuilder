import React from 'react';
import burger from '../../assets/images/new.png';
import './Logo.css';

const logo = (props) => (
    <div className = "Logo" style = {{height: props.height}}>
        <a href = "/"><img src = {burger} alt = "Burger" className = "img"/></a>
    </div>
);

export default logo;