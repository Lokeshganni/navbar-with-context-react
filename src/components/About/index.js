import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const dark = isDarkTheme && 'dark'
      return (
        <>
          <Navbar />
          <hr />
          <div className={`about-container ${dark}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about-dark"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about-light"
              />
            )}
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
