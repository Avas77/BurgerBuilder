import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Cheese", type:"cheese"},
    {label:"Bacon", type:"bacon"},
    {label:"Meat", type:"meat"}
]

const buildControls = (props) => {
    return(
        <div className = "BuildControls">
            <p>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
            {controls.map(ctrl => {
                return <BuildControl key = {ctrl.label} label = {ctrl.label} 
                clicked = {() => props.click(ctrl.type)} 
                removed = {() => props.remove(ctrl.type)} 
                disabled = {props.disabled[ctrl.type]} />
            })}
            <button className ="OrderButton" disabled = {!props.purchasable}
            onClick = {props.order}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;