import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CompA = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMove] = useState();

    const API = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(response.data.name);
        setName(response.data.name)
        setMove(response.data.moves.length)

    }

    useEffect(() => {
        API();
    },[])

    const selectedNumber = (event) => {
        setNum(event.target.value);
    }

    return (

        <>
        <h1>You choose <span style={{color:'red'}}> {num} value </span></h1>
        <h1>My name is <span style={{color:'red'}}> {name} name </span></h1>
        <h1>I have <span style={{color:'red'}}> {moves} moves </span></h1>
        <select value={num} onChange={selectedNumber}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}

export default CompA;