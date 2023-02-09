import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: Green;
` 
function FetchAPI() {
    const [breed, setBreed] = useState([])

    useEffect(() => {
        fetch('https://catfact.ninja/breeds?limit=5')
        .then(response => response.json())
        .then((breed) => {
            console.log(breed.data)
            setBreed(breed)
        })
    })

    return (
        <>
            <Title>Cat</Title>
            <pre>{JSON.stringify(breed, null, 2)}</pre>
        </>
    )
}

export default FetchAPI