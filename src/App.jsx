import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Note from "./components/notes/Note";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      isShowNotify: false,
      notifyType: "success",
      notifyMessage: ""
    };

    this.loginComponentRef = React.createRef();
  }

  Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  showNotify = (message, type) => {
    this.setState({
      isShowNotify: true,
      notifyType: type,
      notifyMessage: message,
    });
  };

  onHideNotify = () => {
    this.setState({
      isShowNotify: false,
    });
  };

  btnLoginClick = (userName, password) => {
    if (userName === "admin" && password === "admin@123") {
      this.showNotify("Login success!", "success");
      this.setState({ isLogged: true });
    } else {
      this.showNotify("Login error! Please check your credentials!", "error");
      this.loginComponentRef.current.loginResponse(false);
    }
  };

  btnLogoutClick = () => {
    this.setState({
      isLogged: false,
    });
  };

  render() {
    const { isLogged, isShowNotify, notifyType, notifyMessage } = this.state;
    const showLoginForm = !isLogged ? (
      <Login
        ref={this.loginComponentRef}
        btnLoginClick={this.btnLoginClick}
        loginResponse={isLogged}
      ></Login>
    ) : (
      <Note btnLogoutClick={this.btnLogoutClick}></Note>
    );
    return (
      <div>
        {showLoginForm}
        <Snackbar
          open={isShowNotify}
          autoHideDuration={3000}
          onClose={this.onHideNotify}
        >
          <this.Alert severity={notifyType} onClose={this.onHideNotify}>
            {notifyMessage}
          </this.Alert>
        </Snackbar>
      </div>
    );
  }
}
