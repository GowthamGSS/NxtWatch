import {Component} from 'react'

import Cookies from 'js-cookie'

class Login extends Component {
  state = {
    username: '',
    password: '',
    submitStatus: true,
    showPassword: false,
    errorMessage: '',
  }

  responseSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.push('/')
  }

  responseFailure = errorMsg => {
    this.setState({submitStatus: false, errorMessage: errorMsg})
  }

  clickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const formattedResponse = await response.json()

    if (response.ok === true) {
      this.responseSuccess(formattedResponse.jwt_token)
    } else {
      this.responseFailure(formattedResponse.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeShowPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMessage,
      submitStatus,
    } = this.state
    const type = showPassword ? 'text' : 'password'
    return (
      <div>
        <div className="card">
          <form onSubmit={this.clickSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              onChange={this.changeUsername}
              id="username"
              value={username}
            />
            <label htmlFor="password">Password</label>
            <input
              type={type}
              onChange={this.changePassword}
              id="password"
              value={password}
            />
            <input
              type="checkbox"
              id="checkbox"
              onClick={this.changeShowPassword}
            />
            <label htmlFor="checkbox">Show Password</label>
            {!submitStatus && <p>{errorMessage}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login