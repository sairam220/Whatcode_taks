import { Component } from "react";
import { Link } from "react-router-dom";

import CartSummary from "../cartSummary";
import CartContext from "../../context";
import "./index.css";

class Cart extends Component {
  renderEmptyView = () => (
    <div className="empty-container">
      <h1 className="empty-heading">Shopping Bag - Checkout 🛒</h1>
      <img
        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690650818/Group_48_uhieaq.png"
        alt="cart empty"
        className="cart-empty-image"
      />
    </div>
  );
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const cartLength = cartList.length === 0;

          const renderCartItem = () => (
            <ul className="payment-container">
              <h1 className="empty-heading">Shopping Bag - Checkout 🛒</h1>
              {cartList.map((each) => (
                <li className="payment-option-24">
                  <div>
                    <img
                      src={each.imageSrc}
                      className="star-image"
                      alt="round"
                    />
                    {each.price} {each.description}
                  </div>
                  <p className="dark1">{each.quantity}</p>
                </li>
              ))}
            </ul>
          );

          return (
            <div className="cart-container">
              <div className="Navbar">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690621650/REFLECT_1_jnnycc.png"
                    className="icon"
                    alt="icon"
                  />
                </Link>

                <button onClick={this.onclickLogout} className="city-select">
                  City Select
                  <img
                    src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690636860/location-pin_1_zy0hgz.png"
                    className="cart-btn-image"
                    alt="btn"
                  />
                </button>
              </div>
              {cartLength ? this.renderEmptyView() : renderCartItem()}

              <CartSummary />
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Cart;

//onClick={() => {redirectToCheckout();}}
