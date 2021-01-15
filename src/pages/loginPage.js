import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {Typography } from '@material-ui/core';

{/* <GoogleLogin
    clientId="483958587223-cakedgguhjvl7im3ddlkrt8de18756rs.apps.googleusercontent.com"
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/>

const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),   
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  } */}

const CLIENT_ID = '483958587223-cakedgguhjvl7im3ddlkrt8de18756rs.apps.googleusercontent.com';

const useStyles  = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export class loginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    const { classes } = this.props;
    return (
    <div>
      { this.state.isLogined ?
        // <GoogleLogout
        //   clientId={ CLIENT_ID }
        //   buttonText='Logout'
        //   onLogoutSuccess={ this.logout }
        //   onFailure={ this.handleLogoutFailure }
        // >
        // </GoogleLogout>
        window.location.replace('/dashboard')
        : 
        <span>
          <div>
            <Typography variant="h2" color="primary" align="center">
              Selamat datang
            </Typography>
          </div>
          <div align='center'>
          <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Login'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
          />
          </div>
        </span>
      }
      {/* { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null } */}
    </div>
    )
  }
}

export default loginPage


