// importing default export - name can be different
// import Product from "./Product";
// importing named export - name must be same
import { ProductList } from "./ProductList"

const App = () => {
  
  return (
    // jsx
    <div className="App">
      <ProductList />
    </div>
  );
};

export default App;
