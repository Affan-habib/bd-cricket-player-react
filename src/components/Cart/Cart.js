import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, plr) => total + plr.salary, 0)
    console.log(cart)
    return (
        <div className='cart'>
            <h4>Players Selected: {cart.length}</h4>
            <h5>Total Cost(BDT):  {total}</h5>
            <h6>Your team players:({cart.length}) </h6>
            <ol>
            {
                cart.map(player =><li>{player.name}</li>)
            }
            </ol>
        </div>
    );
};

export default Cart;