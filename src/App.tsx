<<<<<<< HEAD
import {Routes, Route} from "react-router-dom";
import Productlist from "./pages/products/product-list";
import Productdetails from "./pages/products/product-details";

function App() {
  return (<Routes>
    <Route path="/" element={<Productlist />}/>
    <Route path="/product-details" element={<Productdetails />}/>
  </Routes>);
=======
function App() {
  return <h1 className="text-3xl font-bold text-pink-500">Hello Nandini 💅</h1>;
>>>>>>> f327d702697e9bdfdd0a7678ea4edc464238d686
}

export default App;
