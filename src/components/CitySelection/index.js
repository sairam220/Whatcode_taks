import { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const cityList = [
  {
    cityName: "Raipur",
    cityId: 1,
    date: "10/11/2023",
  },
  {
    cityName: "Haryana",
    cityId: 2,
    date: "09/12/2023",
  },
  {
    cityName: "Amritsar",
    cityId: 3,
    date: "02/01/2024",
  },
  {
    cityName: "Nagpur",
    cityId: 4,
    date: "18/11/2024",
  },
  {
    cityName: "Pune",
    cityId: 1,
    date: "23/11/2024",
  },
  {
    cityName: "Nashik",
    cityId: 1,
    date: "01/15/2024",
  },
  {
    cityName: "Goa",
    cityId: 1,
    date: "05/05/2024",
  },
];

class CitySelection extends Component {
  state = { cityList: cityList };

  onSearchCity = (event) => {
    const filteredCityList = cityList.filter((each) =>
      each.cityName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ cityList: filteredCityList });
  };

  onclickLogout = () => {
    const { history } = this.props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  render() {
    const { cityList } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="city-background-container">
        <div className="Navbar">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690621650/REFLECT_1_jnnycc.png"
              className="icon"
              alt="icon"
            />
          </Link>

          <div>
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
            <button onClick={this.onclickLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
        <h1 className="location-heading">
          Select your Location
          <img
            src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690630281/PngItem_453216_1_ciwndb.png"
            alt="location"
          />
        </h1>
        <input
          type="search"
          placeholder="search"
          className="search-container"
          onChange={this.onSearchCity}
        />
        <ul className="ul-items">
          {cityList.map((each) => (
            <li key={each.cityId} className="city-item">
              <div className="city">
                <img
                  src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690629359/image_2_lwitpk.png"
                  alt="city"
                  className="city-image"
                />
                <p className="city-name">{each.cityName}</p>
              </div>
              <p className="city-date">{each.date}</p>
              <Link to="/selectseat" className="link">
                <button className="city-btn">
                  Book Now
                  <img
                    src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690629427/image_3_zmgowj.png"
                    alt="btn"
                  />
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="footer-container">
          <h1 className="heading">
            Not found the City you were looking for 😕?
          </h1>
          <button className="sales-btn">Contact Sales ☎️</button>
        </div>
      </div>
    );
  }
}

export default CitySelection;
