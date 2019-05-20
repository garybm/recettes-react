import React, { Component } from 'react'
import background from '../assets/images/background.jpg';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="mainContainer">
      <style jsx>{`
      .mainContainer {
        width: 100%;
        index-z: 1;
      }
      img {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
      }
      .formContainer{
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:50%;
        margin: auto;
        // margin-top: 10%;
        padding: 50px;
      }
      .input-field label {
        color: white;
      }
      .input-field input {
        color: white;
      }
      button {
        background-color: #95a00d;
        color: white;
        border: none;
        border-radius: 25px;
        width: 254px;
        height: 50px;
        cursor: pointer;
      }
      `}</style>
        <img className="background" src={background}
        alt='background'/>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <h5 className=" white-text text-darken-3">SIGN UP</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>SIGN UP</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
