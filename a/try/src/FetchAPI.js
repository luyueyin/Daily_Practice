import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Heading = styled.h1`
    color: Green;
    margin-top: 80px;
    margin-left: 2em;
`;

// const Button = styled.button`
//     text-align: center;
//     font-size: 1.5em;
//     margin-left: 3em;
//     cursor: pointer;
// `;

function FetchAPI() {
    
    const [breed, setBreed] = useState([]);

    // const apiget = () => {
    //     fetch("https://catfact.ninja/breeds?limit=3")
    //     .then((response) => response.json())
    //     .then((breeds) => {
    //         console.log(breeds.data);
    //         setBreed(breeds.data);
    //     });
    // }

    useEffect(() => {
        fetch("https://catfact.ninja/breeds?limit=2")
        .then((response) => response.json())
        .then((breeds) => {
            console.log(breeds.data);
            setBreed(breeds.data);
        });
    },[]);

    return (
        <div>
            <Heading> Cat Facts</Heading>
            {/* <Button onClick={apiget}>Fetch API</Button> */}
            <br />
            <pre>{JSON.stringify(breed, null, 2)}</pre>
            {/* <div>
                <ul>
                    {breed.map((breed) => (
                        <p>Country: {breed.country}</p>
                    ))}
                    
                </ul>
            </div> */}

            
        </div>
    );
}

export default FetchAPI;
