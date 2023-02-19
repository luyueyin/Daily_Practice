import "./App.css";
import React from "react";

const users = [
  {
    email: "E@gmail.com",
    password: "password",
  },
  {
    email: "D@gmail.com",
    password: "111111",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      successMessage: "",
      email: "",
      password: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // console.log(email, password)  ---testing
    this.setState({
      errorMessage: "",
      successMessage: "",
    });
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      if (foundUser.password === password) {
        this.setState({
          successMessage: "User successfully authenticated!",
        });
      } else {
        this.setState({
          errorMessage: "Wrong credentials have been provided!",
        });
      }
    } else {
      this.setState({
        errorMessage: "Wrong credentials have been provided!",
      });
    }
  };

  handlechange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const { email, password, errorMessage, successMessage } = this.state;
    return (
      <div className="container">
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={this.handlechange}
          />
          <label htmlFor="passowrd">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={this.handlechange}
          />
          <input type="submit" value="submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
