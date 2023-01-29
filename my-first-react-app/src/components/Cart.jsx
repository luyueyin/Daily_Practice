function Card() {

    const items = [
        {
            id: 1,
            title: "Bag",
            price: 50,
            description: "Bags for eneryone",
            category: "Womens",
            image: "https://robohash.org/Bag",
            rating: {
                rate: 4,
                count: 100
            },
        },
        {
            id: 2,
            title: "Phone",
            price: 800,
            description: "Phone for eneryone",
            category: "Womens",
            image: "https://robohash.org/Phone",
            rating: {
                rate: 4,
                count: 100
            },
        }
    ]

    return (
        <div>
            <h2>Cart</h2>
            {
                items.map((item) => {
                    return (
                        <div>
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card

