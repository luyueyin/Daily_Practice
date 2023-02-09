import React, { useState, useEffect } from "react";

function FetchAPI() {

    const [breed, setBreed] = useState([])
    useEffect(() => {
        fetch('https://catfact.ninja/breeds?limit=5')
        .then((response) => response.json())
        .then((breed) => {
            console.log(breed.data);
            setBreed(breed.data)
        });
    },[])

    return (
        <>
        <h1>Cat</h1>
        <pre>{JSON.stringify(breed)}</pre>
        </>
    )
}

export default FetchAPI