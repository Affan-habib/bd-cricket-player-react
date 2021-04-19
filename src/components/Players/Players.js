import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
    const {name, salary, photo} = props.player;
    // console.log(name)
    // console.log(props)
    return (
        <div className = 'player-info col-md-4'>
            <img src={photo} alt=""/>
            <h5>{name}</h5>
            <h6>Salary(BDT): {salary}</h6>
            <button className = 'btn btn-info' onClick= {()=>props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faShoppingCart} />  Add to your team</button>
        </div>
    );
};

export default Players;