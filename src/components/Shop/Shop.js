import React, { useState } from "react";
import playerData from "../../playerData/playerData.json";
import Cart from "../Cart/Cart";
import Players from "../Players/Players";
import './Shop.css'
const Shop = () => {
  const [players, setPlayers] = useState(playerData);
  const [cart, setCart] = useState([])
  const handleAddPlayer = (player)=>{
      const newCart = [...cart ,player]
      setCart(newCart)
        // console.log('Player Added', player)
  }
  return (
    <div className="shop-container d-flex">
      <div className="players-container col-md-9 justify-content-around">
          {players.map((player) => (
            <Players player = {player} handleAddPlayer = {handleAddPlayer}></Players>
          ))}
        
      </div>
      <div className="cart-container col-md-3">
            <Cart cart= {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
