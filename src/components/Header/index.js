import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ContextController from '../../context/ContextController'

const Header = props => (
  <ContextController.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const theme = isDarkTheme ? '#00306e' : '#ffffff'
      const onChangeTheme = () => {
        toggleTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <nav>
          <Link to="/">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <div>
            <button onClick={onChangeTheme} type="button" data-testid="theme">
              {isDarkTheme ? (
                <BsMoon size={25} />
              ) : (
                <BsBrightnessHigh color="#ffffff" size={25} />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup modal trigger={<button type="button">Logout</button>}>
              {close => (
                <div>
                  <p>Are you sure you want to logout?</p>
                  <div>
                    <button
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </button>
                    <button type="button" onClick={onLogout}>
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </nav>
      )
    }}
  </ContextController.Consumer>
)
export default withRouter(Header)
