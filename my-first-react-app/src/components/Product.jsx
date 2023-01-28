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
        <div>
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
                    marginTop: 10
                }}>${item.price}</div>
        </div>
    )
}

export default Product