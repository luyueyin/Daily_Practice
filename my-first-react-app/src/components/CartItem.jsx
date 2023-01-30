const CartItem = (props) => {
    const item = props.item
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
            <div style={{ marginTop: 15 }}>
                <button> - </button>
                <span style={{ margin: '0px 5px' }}> 5 </span>
                <button> + </button>
            </div>
        </div>
    )
}

export default CartItem