import styled from "styled-components";

import Product from "./Product";
import Title from "./styled/Title"
import GridBox from "./styled/GridBox"

const CustomGrid = styled(GridBox)`
    padding: 60px;
`

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
                count: 100,
            },
            stock: 10,
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
                count: 100,
            },
            stock: 10,
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
                count: 100,
            },
            stock: 10,
        },
        {
            id: 4,
            title: "Bag",
            price: 50,
            description: "Bags for eneryone",
            category: "Womens",
            image: "https://robohash.org/Bagx",
            rating: {
                rate: 4,
                count: 100,
            },
            stock: 10,
        },
        {
            id: 5,
            title: "Phone",
            price: 800,
            description: "Phone for eneryone",
            category: "Womens",
            image: "https://robohash.org/Phonex",
            rating: {
                rate: 4,
                count: 100,
            },
            stock: 10,
        },
        {
            id: 6,
            title: "shoe",
            price: 300,
            description: "Shoe for eneryone",
            category: "Womens",
            image: "https://robohash.org/shoex",
            rating: {
                rate: 4,
                count: 100,
            },
            stock: 10,
        },
        {
            id: 7,
            title: "Bag",
            price: 50,
            description: "Bags for eneryone",
            category: "Womens",
            image: "https://robohash.org/Bagy",
            rating: {
                rate: 4,
                count: 100,
            },
            stock: 10,
        },
        {
            id: 8,
            title: "Phone",
            price: 800,
            description: "Phone for eneryone",
            category: "Womens",
            image: "https://robohash.org/clothes",
            rating: {
                rate: 4,
                count: 100
            },
            stock: 10,
        },
        {
            id: 9,
            title: "shoe",
            price: 300,
            description: "Shoe for eneryone",
            category: "Womens",
            image: "https://robohash.org/shoey",
            rating: {
                rate: 4,
                count: 100,
            },
            stock: 10,
        }

    ]
    return (
        <div id="products">
        <Title>Products</Title>
        <CustomGrid>
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
        </CustomGrid>
        </div>
    )
}

//named export
// we can have many named exports in a file  ---> export { ProductList, Cart }
export { ProductList }