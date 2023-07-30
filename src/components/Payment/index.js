import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "../../context";
import "./index.css";

const Payment = () => {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        let total = 0;
        cartList.forEach((eachCartItem) => {
          total += eachCartItem.price * eachCartItem.quantity;
        });
        return (
          <>
            <div className="Navbar">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690621650/REFLECT_1_jnnycc.png"
                  className="icon"
                  alt="icon"
                />
              </Link>

              <div>
                <Link to="/">
                  <button className="city-select">
                    City Select
                    <img
                      src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690636860/location-pin_1_zy0hgz.png"
                      className="cart-btn-image"
                      alt="btn"
                    />
                  </button>
                </Link>
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

            <MDBContainer className="py-5" fluid>
              <MDBRow className=" d-flex justify-content-center">
                <MDBCol md="10" lg="8" xl="5">
                  <MDBCard className="rounded-3">
                    <MDBCardBody className="p-4">
                      <div className="text-center mb-4">
                        <h3>{total} /- Rupees</h3>
                      </div>
                      <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                      <div className="d-flex flex-row align-items-center mb-4 pb-1">
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                          alt="payment"
                        />
                        <div className="flex-fill mx-3">
                          <div className="form-outline">
                            <MDBInput
                              label="Card Number"
                              id="form1"
                              type="text"
                              size="lg"
                            />
                          </div>
                        </div>
                        <a href="#!">Remove card</a>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 pb-1">
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/visa.png"
                          alt="payment"
                        />
                        <div className="flex-fill mx-3">
                          <div className="form-outline">
                            <MDBInput
                              label="Card Number"
                              id="form2"
                              type="text"
                              size="lg"
                            />
                          </div>
                        </div>
                        <a href="#!">Remove card</a>
                      </div>
                      <p className="fw-bold mb-4">Add new card:</p>
                      <MDBInput
                        label="Cardholder's Name"
                        id="form3"
                        type="text"
                        size="lg"
                        value=""
                      />
                      <MDBRow className="my-4">
                        <MDBCol size="7">
                          <MDBInput
                            label="Card Number"
                            id="form4"
                            type="text"
                            size="lg"
                          />
                        </MDBCol>
                        <MDBCol size="3">
                          <MDBInput
                            label="Expire"
                            id="form5"
                            type="password"
                            size="lg"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol size="2">
                          <MDBInput
                            label="CVV"
                            id="form6"
                            type="password"
                            size="lg"
                            placeholder="CVV"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBBtn color="success" size="lg" block>
                        Paynow
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Payment;
