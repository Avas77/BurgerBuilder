import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return(
        <div className = "CheckoutSummary">
            <h1>Here is your delicious burger!!!</h1>
            <div style = {{width:'100%',margin:'auto'}}>
                <Burger ingredients = {props.ingredients} /> 
            </div>
            <Button btntypes = "Button2" clicked = {props.cancel}>Cancel</Button>
            <Button btntypes = "Button1" clicked = {props.continue}>Continue</Button>
        </div>

    )
}

export default checkoutSummary;