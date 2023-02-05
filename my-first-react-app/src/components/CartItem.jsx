import { useState } from "react"

const CartItem = (props) => {
    const [noOfItems, setNoOfItems] = useState(1)
    const item = props.item

    const handleDecrease = () => {
        setNoOfItems((prevState) => {
            return prevState - 1
        })
    }
    const handleIncrease = () => {
        setNoOfItems((prevState) => {
            return prevState + 1
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
 
        }}>
            <img style={{
                height: 250,
            }} src={item.image} alt="Bag">
            </img>
            <div style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 20
            }}>{item.title}
            </div>
            <div>{item.description}</div>
            <div
                style={{
                    color: 'red',
                    marginTop: 10
                }}>${item.price}
            </div>
            <div>Stock: {item.stock}</div>
            <div style={{ marginTop: 15 }}>
                <button disabled={noOfItems === 0} onClick={handleDecrease}> - </button>
                <span style={{ margin: '0px 5px' }}> {noOfItems} </span>
                <button disabled={noOfItems === item.stock} onClick={handleIncrease}> + </button>
            </div>
            <div>Total Price: ${noOfItems * item.price}</div>
        </div>
    )
}

export default CartItem