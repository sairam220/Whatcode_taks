import { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CartContext from "../../context";
import "./index.css";

class SelectSeat extends Component {
  state = {
    thirtyTwo: 55000,
    twentyFour: 35000,
    eighteen: 25000,
    quantity18: 1,
    quantity24: 1,
    quantity36: 1,
  };

  increasQuantity36AndPrice = () => {
    this.setState((prev) => ({ quantity36: prev.quantity36 + 1 }));
    this.setState((prev) => ({ thirtyTwo: prev.thirtyTwo + 55000 }));
  };

  desreseQuantity36AndPrice = () => {
    if (this.state.quantity36 > 1) {
      this.setState((prev) => ({ quantity36: prev.quantity36 - 1 }));
      this.setState((prev) => ({ thirtyTwo: prev.thirtyTwo - 55000 }));
    }
  };

  increasQuantity24AndPrice = () => {
    this.setState((prev) => ({ quantity24: prev.quantity24 + 1 }));
    this.setState((prev) => ({ twentyFour: prev.twentyFour + 35000 }));
  };

  desreseQuantity24AndPrice = () => {
    if (this.state.quantity24 > 1) {
      this.setState((prev) => ({ quantity24: prev.quantity24 - 1 }));
      this.setState((prev) => ({ twentyFour: prev.twentyFour - 35000 }));
    }
  };

  increasQuantity18AndPrice = () => {
    this.setState((prev) => ({ quantity18: prev.quantity18 + 1 }));
    this.setState((prev) => ({ eighteen: prev.eighteen + 25000 }));
  };

  desreseQuantity18AndPrice = () => {
    if (this.state.quantity18 > 1) {
      this.setState((prev) => ({ quantity18: prev.quantity18 - 1 }));
      this.setState((prev) => ({ eighteen: prev.eighteen - 25000 }));
    }
  };

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { addCartItem } = value;

          const addEighteenFeet = () => {
            const { quantity18, eighteen } = this.state;
            const object = {
              id: uuidv4(),
              quantity: quantity18,
              price: eighteen,
              description: "18 Sq. Mt.",
              imageSrc:
                "https://res.cloudinary.com/dmov4v1ui/image/upload/v1690640453/Ellipse_4_1_vgya2r.png",
            };
            addCartItem(object);
          };

          const addTwentyFourFeet = () => {
            const { quantity24, twentyFour } = this.state;
            const object = {
              id: uuidv4(),
              quantity: quantity24,
              price: twentyFour,
              description: "24 Sq. Mt.",
              imageSrc:
                "https://res.cloudinary.com/dmov4v1ui/image/upload/v1690640129/Ellipse_4_ayxxtk.png",
            };
            addCartItem(object);
          };

          const addThirtySix = () => {
            const { quantity36, thirtyTwo } = this.state;
            const object = {
              id: uuidv4(),
              quantity: quantity36,
              price: thirtyTwo,
              description: "36 Sq. Mt.",
              imageSrc:
                "https://res.cloudinary.com/dmov4v1ui/image/upload/v1690639718/image_7_xx3rnt.png",
            };
            addCartItem(object);
          };

          return (
            <div className="selectSeatContainer">
              <div className="Navbar">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690621650/REFLECT_1_jnnycc.png"
                    className="icon"
                    alt="icon"
                  />
                </Link>

                <div>
                  <button onClick={this.onclickLogout} className="city-select">
                    City Select
                    <img
                      src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690636860/location-pin_1_zy0hgz.png"
                      className="cart-btn-image"
                      alt="btn"
                    />
                  </button>
                  <Link to="/cart">
                    <button className="cart-btn">
                      Go to Cart
                      <img
                        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690633573/Group_28_kjgmgh.png"
                        alt="cart-btn"
                        className="cart-btn-image"
                      />
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690636476/Vector_1_pxj9e2.png"
                alt="booking"
                className="booking-image"
              />
              <img
                src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690638378/Group_33_yrzy6r.png"
                alt="header"
              />
              <ul className="payment-container">
                <div>
                  <li className="payment-option-32">
                    <div>
                      <img
                        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690639718/image_7_xx3rnt.png"
                        className="star-image"
                        alt="star"
                      />
                      {this.state.thirtyTwo} 32 Sq. Mt.
                    </div>
                    <div className="quntity-container">
                      <AiOutlinePlusCircle
                        className="quantity-icon"
                        onClick={this.increasQuantity36AndPrice}
                      />
                      <p>{this.state.quantity36}</p>
                      <AiOutlineMinusCircle
                        className="quantity-icon"
                        onClick={this.desreseQuantity36AndPrice}
                      />
                      <button className="cart-btn1" onClick={addThirtySix}>
                        Add to Cart
                      </button>
                    </div>
                  </li>
                </div>
                <div>
                  <li className="payment-option-24">
                    <div>
                      <img
                        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690640129/Ellipse_4_ayxxtk.png"
                        className="round-image"
                        alt="round"
                      />
                      {this.state.twentyFour} 24 Sq. Mt.
                    </div>
                    <div className="quntity-container">
                      <AiOutlinePlusCircle
                        className="quantity-icon"
                        onClick={this.increasQuantity24AndPrice}
                      />
                      <p>{this.state.quantity24}</p>
                      <AiOutlineMinusCircle
                        className="quantity-icon"
                        onClick={this.desreseQuantity24AndPrice}
                      />
                      <button className="cart-btn1" onClick={addTwentyFourFeet}>
                        Add to Cart
                      </button>
                    </div>
                  </li>
                </div>
                <div>
                  <li className="payment-option-18">
                    <div className="description-18">
                      <img
                        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690640453/Ellipse_4_1_vgya2r.png"
                        className="round-image"
                        alt="round"
                      />
                      {this.state.eighteen} 18 Sq. Mt.
                    </div>
                    <div className="quntity-container">
                      <AiOutlinePlusCircle
                        className="quantity-icon"
                        onClick={this.increasQuantity18AndPrice}
                      />
                      <p className="quantity-18">{this.state.quantity18}</p>
                      <AiOutlineMinusCircle
                        className="quantity-icon"
                        onClick={this.desreseQuantity18AndPrice}
                      />
                      <button className="cart-btn1" onClick={addEighteenFeet}>
                        Add to Cart
                      </button>
                    </div>
                  </li>
                </div>
              </ul>
              <Link to="/" className="link btn">
                <button className="city-btn btn">
                  Back to City
                  <img
                    src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690629427/image_3_zmgowj.png"
                    alt="btn"
                  />
                </button>
              </Link>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default SelectSeat;
