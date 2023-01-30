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
    // const item = {
    //     id: 1,
    //     title: "Bag",
    //     price: 50,
    //     description: "Bags for eneryone",
    //     category: "Womens",
    //     image: "https://robohash.org/hi",
    //     rating: {
    //         rate: 4,
    //         count: 100
    //     }

    // }

    const item = props.ProductInfo
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
                    marginBottom:15,
                }}>${item.price}</div>
            <Button>Add To Cart</Button>
        </Wrapper>
    )
}

export default Product