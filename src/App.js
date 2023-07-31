import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Login from "./components/Login";
import CartContext from "./context";
import CitySelection from "./components/CitySelection";
import SelectSeat from "./components/SelectSeat";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartItem = (product) => {
    const { cartList } = this.state;
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === product.id
    );

    if (productObject) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachCartItem) => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity;

            return { ...eachCartItem, quantity: updatedQuantity };
          }

          return eachCartItem;
        }),
      }));
    } else {
      const updatedCartList = [...cartList, product];

      this.setState({ cartList: updatedCartList });
    }
    console.log(cartList);
  };

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider value={{ cartList, addCartItem: this.addCartItem }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={CitySelection} />
            <Route exact path="/selectseat" component={SelectSeat} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
