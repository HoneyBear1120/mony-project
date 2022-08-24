import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BarIcon } from '../../Media'
function Header() {
  let navigate = useNavigate()
  let location = useLocation()
  const [toggle, setToggle] = useState(false)
  // const [Scroll, setScroll] = useState(false)
  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     const scrollCheck = window.scrollY > 20
  //     if (scrollCheck) {
  //       setScroll(true)
  //     } else {
  //       setScroll(false)
  //     }
  //   })
  // })

  return (
    <>
      <header className="pt-3 pb-2">
        <nav className="navbar navbar-expand-xl ">
          <div className="container-fluid">
            <button
              className={`navbar-toggler p-0 order-lg-1`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle navigation"
            >
              <img src={BarIcon} alt="bar_icon" />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-center order-lg-2 order-3 ${
                toggle ? 'show' : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item cp">
                  <a
                    className={`nav-link ${
                      location.pathname == '/' ? 'active' : ''
                    }`}
                    aria-current="page"
                    onClick={() => navigate('/')}
                  >
                    Home
                  </a>
                </li>
                {/* <li className="nav-item dropdown dark_menu">
                  <a
                    className="nav-link dropdown-toggle"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User Info
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" >
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Another action
                      </a>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item cp">
                  <a
                    className={`nav-link ${
                      location.pathname == '/wallet' ||
                      location.pathname == '/wallet-next' ||
                      location.pathname == '/wallet-filter'
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => navigate('/wallet')}
                  >
                    Wallet
                  </a>
                </li>
                <li className="nav-item cp">
                  <a
                    className={`nav-link ${
                      location.pathname == '/Exchanges' ? 'active' : ''
                    }`}
                  >
                    Exchanges
                  </a>
                </li>
                <li className="nav-item cp">
                  <a
                    className={`nav-link ${
                      location.pathname == '/Watchlist' ? 'active' : ''
                    }`}
                  >
                    Watchlist
                  </a>
                </li>
                <li className="nav-item cp" onClick={() => navigate('/blogs')}>
                  <a
                    className={`nav-link ${
                      location.pathname == '/blogs' ? 'active' : ''
                    }`}
                  >
                    Blog
                  </a>
                </li>
                <li
                  className="nav-item cp"
                  onClick={() => navigate('/customer-benefits')}
                >
                  <a
                    className={`nav-link ${
                      location.pathname == '/customer-benefits' ? 'active' : ''
                    }`}
                  >
                    Customer Benefits
                  </a>
                </li>
                <li
                  className="nav-item cp"
                  onClick={() => navigate('/mission-statements')}
                >
                  <a
                    className={`nav-link ${
                      location.pathname == '/mission-statements' ? 'active' : ''
                    }`}
                  >
                    Mission Statement
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav flex-row order-lg-3 order-2 right_button">
              <li className="nav-item cp">
                <a className="nav-link">Login</a>
              </li>
              <li className="nav-item cp">
                <a className="btn btn-secondary">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
