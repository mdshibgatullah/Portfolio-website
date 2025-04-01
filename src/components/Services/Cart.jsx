import React from 'react';
import './Services.css';

const Cart = (props) => {
    const {icon, name, details} = props.item;
    return (
        <div className='single-service'>
            <span>{icon}</span>
            <h2>{name}</h2>
            <p>{details}</p>
        </div>
    );
};

export default Cart;