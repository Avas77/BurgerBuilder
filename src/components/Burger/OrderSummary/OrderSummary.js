import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'; 

const orderSummary = (props) =>{
    const orderList = Object.keys(props.orderSummary).map(key => {
        return(
            <div>
                <span style = {{textTransform: 'capitalize'}}>
                {key} </span> : {props.orderSummary[key]} <br></br>
            </div>
        )
    });

    return(
        <Aux>
            <p>Here is your delicious Burger:</p>
            {orderList}
            <p><strong>Your total sum is {props.price.toFixed(2)} $</strong></p>
            <p>Continue to checkout?</p>
            <Button btntypes = "Button2" clicked = {props.cancel}>Cancel</Button>
            <Button btntypes = "Button1" clicked = {props.continue}>Continue</Button>
        </Aux>
    )

}

export default orderSummary;