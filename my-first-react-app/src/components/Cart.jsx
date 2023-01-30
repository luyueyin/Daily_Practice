import Title from "./styled/Title"
import GridBox from "./styled/GridBox"
import CartItem from "./CartItem"

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
        <div id="cart">
            <Title>Cart</Title>
            <GridBox>
                {
                    items.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })
                }
            </GridBox>
        </div>
    )
}

export default Card

