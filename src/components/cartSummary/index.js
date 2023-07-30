import { Link } from "react-router-dom";
import CartContext from "../../context";

import "./index.css";

const CartSummary = () => {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        let total = 0;
        cartList.forEach((eachCartItem) => {
          total += eachCartItem.price * eachCartItem.quantity;
        });
        console.log(total);

        return (
          <div className="cost-details-container">
            <p className="pink-para">
              We levy a 50% Advance on all our Stall sales. The rest 50% shall
              be credited post the event.
            </p>
            <div className="cost-details">
              <p className="light">Subtotal</p>
              <li className="light">{total}</li>
            </div>
            <div className="cost-details">
              <p className="light">Tax</p>
              <li className="light">{total / 10}</li>
            </div>
            <div className="cost-details">
              <p className="dark">Total</p>
              <li className="dark">{total + total / 10}</li>
            </div>
            <Link to="/payment">
              <button className="login-button-1">Pay now</button>
            </Link>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default CartSummary;
