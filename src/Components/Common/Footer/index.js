import React, { useState } from 'react'
import { Instagram, YouTube, FaceBook, FooterImage } from '../../Media'
import { useNavigate } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

function Footer() {
  let navigate = useNavigate()
  const today = new Date()
  const year = today.getFullYear()
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <footer style={{ zIndex: '1', position: 'absolute' }}>
        <div className="top-footer">
          <div className="container-fluid p-0">
            <div className="row m-auto">
              <div className="col-12 p-0">
                <div className=""></div>
                <img src={FooterImage} alt="footer_image.svg" />
              </div>
            </div>
          </div>
          <div className="container mt-5 pt-sm-5 pb-lg-5 pb-2">
            <div className="row align-items-center">
              <div className="col-auto  m-sm-0 m-auto text-sm-left text-center order-sm-1 order-1">
                <a
                  onClick={() => navigate('/wallet')}
                  className="btn btn-primary btn-lg"
                >
                  Get Wallet
                </a>
              </div>
              <div className="col-sm-auto col-12 text-center order-sm-2 order-3 m-auto mt-sm-auto mt-3">
                <ul className="list-unstyled list_row mb-0">
                  <li>
                    <a>
                      <img src={Instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={YouTube} alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={FaceBook} alt="facebook" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto m-sm-0 m-auto text-sm-left text-center order-sm-3 order-2">
                <div className="dropdown dark_menu">
                  <button
                    className="btn btn-outline-primary btn-lg dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton11"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setToggle(!toggle)}
                  >
                    Language
                  </button>
                  <ul
                    className={`dropdown-menu ${toggle ? 'show' : ''}`}
                    aria-labelledby="dropdownMenuButton11 "
                  >
                    <li>
                      <a className="dropdown-item">Language 1</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Language 2</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Language 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-sm-4 mt-3">
              <div className="col-auto m-auto">
                <ul className="list-unstyled footer_links list_row mb-0 sm_block">
                  <li>
                    <a onClick={() => navigate('/mission-statements')}>
                      Mission Statement
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate('/customer-benefits')}>
                      Customer Benefits
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate('/blogs')}>Blog</a>
                  </li>
                  <li>
                    <a>White Paper</a>
                  </li>
                  <li>
                    <a>Roadmap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-3 pb-3">
          <div className="row">
            <div className="col-sm-auto col-12 color_secondary order-md-1 order-2 m-md-0 m-auto mt-3 text-sm-start text-center">
              <p className="mb-0">
                © {year} &nbsp;
                <a className="primary_link">Crypto</a>. All rights reserved
              </p>
            </div>
            <div className="col-md-auto col-12 ms-md-auto me-md-0 m-auto order-md-2 order-1">
              <ul className="list-unstyled footer_links list_row mb-0 sm_block">
                <li>
                  <a>FAQ’s</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
