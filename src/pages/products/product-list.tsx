import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

// ✅ type
type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

const Productlist = () => {
  const navigate = useNavigate();

  // ✅ typed state
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/products"). // ✅ correct URL
    then((res) => res.json()).then((data) => {
      console.log(data); // 👀 check this
      setProducts(data);
    }).catch((err) => console.error(err));
  }, []);

  return (<div>
    {/* ✅ LOOP HERE */}
    {
      products.map((product) => (<div key={product.id} className="border rounded-lg shadow-sm p-2 flex mb-4">
        <div className="mr-4">
          <img src={product.image || "/assets/fallback.png"} alt={product.title} className="bg-amber-100 size-56 object-cover rounded"/>{" "}
        </div>

        <div>
          <p className="mt-2 font-semibold">₹ {product.price}</p>

          <p className="text-sm text-gray-500">{product.title}</p>

          <p>{product.description}</p>

          <button className="text-blue-500 mr-5" onClick={() => navigate(`/product-details/${product.id}`)}>
            know more
          </button>
        </div>
      </div>))
    }
  </div>);
};

export default Productlist;
