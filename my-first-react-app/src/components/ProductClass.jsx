import { Component } from "react"

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

export default class ProductClass extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor")
        this.state = {
            itemOnCart: 0
        }
    }

    componentDidMount() { // gets triggered when the component is rendered
        // fetching data from API. listening to websocket APIs, adding event listeners
        console.log("componentDidMount")
    }

    componentDidUpdate() { // gets triggered when the state/props is updated
        // fetching data from API using new state/props value
        console.log("componentDidUpdate")
    }

    componentWillUnmount() { // gets triggered when the component is unmounted
        // to clean up everything - stop listening to websocket APIs, remove event listeners
        console.log("componentWillUnmount")
    }

    handleAddToCard = () => {
        this.setState((prevState) => {
            return {
                itemOnCart: prevState.itemOnCart + 1
            }
        })

    
        // setItemOnCart((preState) => {
        //     return preState + 1
        // })
    }


    render() {
        const item = this.props.ProductInfo
        console.log("render")
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
                <div>Stock Left: {item.stock - this.state.itemOnCart}</div>


                <Button
                    greaterThanFive={this.state.itemOnCart > 5}
                    disabled={item.stock === this.state.itemOnCart}
                    onClick={this.handleAddToCard}>
                    {
                        item.stock === this.state.itemOnCart ? "No Stock Left" : "Add To Cart"
                    }
                </Button>
            </Wrapper>
        )
    }
}

