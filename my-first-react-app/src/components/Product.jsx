
import { useState } from "react"
import styled from "styled-components"

import Button from "./styled/Button"

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:  1px 1px 13px 1px rgba(0,0,0,0.26);
    :hover {
        box-shadow:  1px 1px 17px 1px rgba(0,0,0,0.4);
    }
`

function Product(props) {

    const item = props.ProductInfo

    const [itemOnCart, setItemOnCard] = useState(0)

    function handleAddToCard() {
        setItemOnCard((preState) => {
            return preState + 1
        })
    }

    return (
        <Wrapper>
            <img style={{
                height: 250,
            }} src={item.image} alt="Bag"></img>
            <div style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 20
            }}>{item.title}</div>
            <div>{item.description}</div>
            <div
                style={{
                    color: 'red',
                    marginTop: 7,
                    marginBottom: 15,
                }}>${item.price}</div>
            <div>Stock: {item.stock}</div>
            <div>Stock Left: {item.stock - itemOnCart}</div>


            <Button
                greaterThanFive={itemOnCart > 5}
                disabled={item.stock === itemOnCart}
                onClick={handleAddToCard}>
                {
                    item.stock === itemOnCart ? "No Stock Left" : "Add To Cart"
                }
            </Button>

        </Wrapper>
    )
}

export default Product