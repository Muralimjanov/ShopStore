import React from "react";
import CartItem from "../components/cart-item";

const Home = ({data,addToCart,title}) => {
  return (
    <div>
      <h1>{title} {title==="Главное"?null:data.length}</h1>

      <div className="d-flex flex-wrap justify-content-between gap-4 mt-4">
      {
        data.map((product,index)=>{
            return<CartItem onClick={()=>addToCart(product.id)} children="Add ToCart" key={index} {...product} />
        })
      }
      </div>
    </div>
  );
};

export default Home;
