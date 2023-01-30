// importing default export - name can be different
// import Product from "./Product";
// importing named export - name must be same
import { ProductList } from "./ProductList"
import Cart from "./Cart"
import NavBar from "./mui/NavBar"

const App = () => {
  
  return (
    // jsx
    <div className="App">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
