import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./index.css";

const menImageUrl =
  "https://res.cloudinary.com/dmov4v1ui/image/upload/v1690614892/Group_13_al4w4b.png";

class LoginRoute extends Component {
  state = {
    username: "",
    password: "",
    isShowPassword: false,
    showErrorMsg: false,
    errorMsg: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  showAndHidePassword = () => {
    this.setState((pre) => ({ isShowPassword: !pre.isShowPassword }));
  };

  successLogin = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };

  failedLogin = (errorMsg) => {
    this.setState({ showErrorMsg: true, errorMsg });
  };

  showPassword = () => {
    const { isShowPassword } = this.state;
    this.setState((prevState) => ({
      isShowPassword: !prevState.isShowPassword,
    }));
    console.log(isShowPassword);
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const apiLoginUrl = "https://apis.ccbp.in/login";
    const { username, password } = this.state;
    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(apiLoginUrl, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      this.successLogin(data.jwt_token);
    } else {
      this.failedLogin(data.error_msg);
    }
  };

  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    const {
      username,
      password,
      isShowPassword,
      showErrorMsg,
      errorMsg,
    } = this.state;

    return (
      <div className="main-container">
        <div className="Navbar">
          <img
            src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690621650/REFLECT_1_jnnycc.png"
            className="icon"
            alt="icon"
          />
        </div>
        <div className="BgContainer">
          <img src={menImageUrl} alt="website login" className="LargeImage" />

          <div className="LoginContainer">
            <img className="Rectangle" src={menImageUrl} alt="website login" />
            <h1 className="LoginHeading">Login here!</h1>
            <form className="FormContainer" onSubmit={this.onSubmitForm}>
              <input
                type="text"
                id="userName"
                className="InputElement"
                onChange={this.onChangeUsername}
                value={username}
                placeholder="Username or phone"
              />

              <input
                type={isShowPassword ? "text" : "password"}
                id="password"
                className="InputElement"
                onChange={this.onChangePassword}
                value={password}
                placeholder="Password"
              />

              {showErrorMsg ? <p className="ErrorMsg">*{errorMsg}</p> : null}
              <button className="LoginButton" type="submit">
                Login
              </button>

              <img
                src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690623251/Group_12_ozvcdz.png"
                alt="sign in"
              />
              <div className="icons">
                <FcGoogle className="icon1" />
                <FaFacebook className="icon1" />
              </div>
            </form>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690616433/Vector_ibrvnq.png"
          alt="footer"
          className="bottom-image"
        />
      </div>
    );
  }
}

export default LoginRoute;
