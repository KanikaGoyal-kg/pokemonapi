import React, { useState } from 'react';

const CompA = () => {

    const [num, setNum] = useState();

    const selectedNumber = (event) => {
        setNum(event.target.value)
    }

    return (

        <>
        <h1>You choose {num} value</h1>
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