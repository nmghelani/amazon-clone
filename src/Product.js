import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  console.log('This is the basket >>> ', basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        {title}
        <br />
        <span className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => "🌟")}
          </p>
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
