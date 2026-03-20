import React from "react";
import {useNavigate} from "react-router-dom";

const Productlist = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/product-details");
  };

  return (<div>
    <div>
      <div className="border rounded-lg  shadow-sm p-2 flex">
        <div className="mr-4">
          <img src="/assets/necklace.png" alt="black" className=" bg-amber-100"></img>
        </div>
        <div>
          <p className="mt-2 font-semibold">22,32,336 /-</p>
          <p className="text-green-600 text-sm font-semibold">
            10% off on making charges
          </p>
          <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
          <p>
            Gold jewellery is a timeless, durable, and highly prized luxury metal known for its luster, malleability, and ability to hold value over centuries
          </p>
          <button className="text-blue-500 mr-5" onClick={goToAbout}>
            know more
          </button>
        </div>
      </div>

      <div className="border rounded-lg  shadow-sm p-2 flex">
        <div className="mr-4">
          <img src="/assets/jewel2.jpg
          " alt="black" className=" bg-amber-100 size-56"></img>
        </div>
        <div>
          <p className="mt-2 font-semibold">22,32,336 /-</p>
          <p className="text-green-600 text-sm font-semibold">
            10% off on making charges
          </p>
          <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
          <p>
            Gold jewellery is a timeless, durable, and highly prized luxury metal known for its luster, malleability, and ability to hold value over centuries
          </p>
          <button className="text-blue-500 mr-5" onClick={goToAbout}>
            know more
          </button>
        </div>
      </div>
    </div>
  </div>);
};

export default Productlist;
