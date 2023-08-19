import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div>
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              <GiHamburgerMenu data-testid="hamburgerIconButton" />
            </button>
          }
        >
          {close => (
            <ul>
              <li>
                <Link to="/">
                  <div>
                    <AiFillHome />
                    <h1> Home </h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div>
                    <BsInfoCircleFill />
                    <h1> About </h1>
                  </div>
                </Link>
              </li>

              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose data-testid="closeButton" />
              </button>
            </ul>
          )}
        </Popup>
      </div>
    </nav>
  </div>
)
export default Header
