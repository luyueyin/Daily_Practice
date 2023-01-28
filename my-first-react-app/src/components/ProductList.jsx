import { Fragment } from "react";
import Product from "./Product";

function ProductList() {
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
        },
        {
            id: 3,
            title: "shoe",
            price: 300,
            description: "Shoe for eneryone",
            category: "Womens",
            image: "https://robohash.org/shoe",
            rating: {
                rate: 4,
                count: 100
            }
        }

    ]
    return (
        <>
        <h2>Product</h2>
        < div style={{
            display: 'flex'
        }}>
            {
                items.map((item) => {
                    return (
                        <Product key={item.is} ProductInfo={item} />
                    )
                })
            }
            {/* // <Product ProductInfo={items[0]} />
            // <Product ProductInfo={items[1]} />
            // <Product ProductInfo={items[2]} /> */}
        </ div>
        </>
    )
}

//named export
// we can have many named exports in a file  ---> export { ProductList, Cart }
export { ProductList }