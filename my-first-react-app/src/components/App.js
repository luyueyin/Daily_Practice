import { useState } from "react";
// importing default export - name can be different
// import Product from "./Product";
// importing named export - name must be same
// import { ProductList } from "./ProductList";
import Cart from "./Cart";
import NavBar from "./mui/NavBar";

import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box";

import ProductListClass from "./ProductListClass";
import ProductInfo from "./ProductInfo";

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  function setItem(item) {
    setSelectedItem(item)
  }

  setTimeout(() => {
    setIsloading(false);
  }, 2000);

  return (
    <>
      {isLoading ? ( 
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: "center",
          height: '100vh'
          }}>
          <CircularProgress />
        </Box>
      ) : (
        // jsx
        <div className="App">
          <NavBar />
          <ProductListClass setItem={setItem} />
          <ProductInfo item={selectedItem} />
          
          <Cart />
        </div>
      )}
    </>
  );
};
// }

export default App;
