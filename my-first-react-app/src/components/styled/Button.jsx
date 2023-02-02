import styled from "styled-components"

const Button = styled.button`
    heigth: 10px;
    cursor: pointer;
    border: none;
    background-color: rgba(80, 155, 121, 1);
    border-radius: 10px;
    front-size: 20px;
    color: ${(props) => props.greaterThanFive ? 'black' : 'white'};
    padding: 5px 15px;
    :hover {
        background-color: rgba(30, 115, 141, 0.85);
    }
    :disabled {
        background-color: grey;
        cursor: not-allowed;
    }
    `
    // if more than one property needs to be changed:
    // ${(props) => {
    //     return `
    //         color: ${props.greaterThanFive ? 'balck' : 'white'}';
    //     `
    // }}


export default Button