
import {Routes, Route} from "react-router-dom";
import Productlist from "./pages/products/product-list";
import Productdetails from "./pages/products/product-details";

function App() {
  return (<Routes>
    <Route path="/" element={<Productlist />}/>
    <Route path="/product-details" element={<Productdetails />}/>
  </Routes>);

  }

export default App;
