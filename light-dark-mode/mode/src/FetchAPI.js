import React, { useState, useEffect} from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: Green;
` 

function FetchAPI() {

    const [breed, setBreed] = useState([]);

    useEffect(() => {
        fetch('https://catfact.ninja/breeds?limit=5')
        .then(response => response.json())
        .then((breed) => {
            console.log(breed.data);
            setBreed(breed.data);
        });
    },[]);

    return (
        <div>
            <Title>Cat Breed</Title>
            <pre>{JSON.stringify(breed, null, "\t")}</pre>
        </div>
    )
}

export default FetchAPI;