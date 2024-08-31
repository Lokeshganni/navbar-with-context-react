import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const dark = isDarkTheme && 'dark'
      return (
        <div className={`navbar-main-container ${dark}`}>
          <Link className="link-ele" to="/">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>
          <ul>
            <li>
              <Link className="link-ele" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-ele" to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            aria-label="color-theme"
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
