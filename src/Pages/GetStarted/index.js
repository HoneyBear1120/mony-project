import React, { useEffect, useState } from 'react'
import { HomeShape } from '../../Components/Media'
import { seo } from '../../Helpers/Seo'
import { useNavigate } from 'react-router-dom'
import { Fade, Slide, Zoom } from 'react-reveal'
function GetStarted() {
  const [tabIndex, setTabIndex] = useState(0)
  let navigate = useNavigate()

  useEffect(() => {
    seo({ title: 'Mony Wallet - Get Started' })
  })
  return (
    <>
      {/* <!-- category section start --> */}
      <section className="banner-section min-inherit mb-md-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 position-relative">
              <div className="hero_shape">
                <img src={HomeShape} alt="home_shape" />
              </div>
              <div className="mt-5 pt-5 text-start">
                <div className="mt-md-5 mb--5">
                  <h3>Getting Started With Monycoin</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}
      <section className="border-top pt-5">
        <div className="container">
          <div className="row m-auto">
            <div className="col-xxl-12 col-xl-12 ps-md-0 pe-md-0 ">
              <ul
                className="nav nav-pills mb-3 under-line-tab justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${tabIndex == 0 ? 'active' : ''}`}
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Monycoin"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    onClick={() => setTabIndex(0)}
                    aria-selected="true"
                  >
                    How to Use Monycoin
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${tabIndex == 1 ? 'active' : ''}`}
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-accept"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    onClick={() => setTabIndex(1)}
                  >
                    How to accept Monycoin
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    tabIndex == 0 ? 'active' : ''
                  }`}
                  id="pills-Monycoin"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Fade bottom delay={500}>
                    <div className="timeline mt-5">
                      <ul>
                        <li>
                          {/* <Zoom delay={300}> */}
                          <Fade left delay={1200}>
                            <div className="content">
                              <h2>
                                <time>Inform yourself</time>
                              </h2>
                              <p>
                                Monycoin is different than what you know and use
                                every day. Before you start using Monycoin,
                                there are a few things that you need to know in
                                order to use it securely and avoid common
                                pitfalls.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                          {/* </Zoom> */}
                        </li>
                        <li>
                          <Fade right delay={1300}>
                            <div className="content">
                              <h2>
                                <time>Choose Your Wallet</time>
                              </h2>
                              <p>
                                Free Monycoin wallets are available for all
                                major operating systems and devices to serve a
                                variety of your needs. For example, you can
                                install an app on your mobile device for
                                everyday use or you can have a wallet only for
                                online payments on your computer. In any case,
                                choosing a wallet is easy and can be done in
                                minutes.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                        </li>
                        <li>
                          <Fade left delay={1400}>
                            <div className="content">
                              <h2>
                                <time>Get Monycoin</time>
                              </h2>
                              <p>
                                You can get Monycoin by accepting it as a
                                payment for goods and services. There are also
                                several ways you can buy Monycoin.
                              </p>
                              {/* <a className="btn btn-link">Read More</a> */}
                              <div
                                style={{ marginTop: '6vh', marginLeft: '62%' }}
                                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
                                onClick={() => navigate('/buy-mony')}
                              >
                                <a
                                  // href={() => false}

                                  className="btn btn-primary w-100 buy-mony-coin-btn"
                                >
                                  Buy Monycoin
                                </a>
                              </div>
                            </div>
                          </Fade>
                        </li>
                        <li>
                          <Fade right delay={1500}>
                            <div className="content">
                              <h2>
                                <time>Spend Monycoin</time>
                              </h2>
                              <p>
                                There are a growing number of services and
                                merchants accepting Monycoin all over the world.
                                Use Bitcoin to pay them and rate your experience
                                to help them gain more visibility.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                        </li>
                      </ul>
                    </div>
                  </Fade>
                </div>

                <div
                  className={`tab-pane fade show ${
                    tabIndex == 1 ? 'active' : ''
                  }`}
                  id="pills-accept"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Fade bottom delay={500}>
                    <div className="timeline mt-5">
                      <ul>
                        <li>
                          {/* <Zoom delay={300}> */}
                          <Fade left delay={1200}>
                            <div className="content">
                              <h2>
                                <time>Inform yourself</time>
                              </h2>
                              <p>
                                Monycoin is different than what you know and use
                                every day. Before you start using Monycoin,
                                there are a few things that you need to know in
                                order to use it securely and avoid common
                                pitfalls.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                          {/* </Zoom> */}
                        </li>
                        <li>
                          <Fade right delay={1300}>
                            <div className="content">
                              <h2>
                                <time>Choose Your Wallet</time>
                              </h2>
                              <p>
                                Free Monycoin wallets are available for all
                                major operating systems and devices to serve a
                                variety of your needs. For example, you can
                                install an app on your mobile device for
                                everyday use or you can have a wallet only for
                                online payments on your computer. In any case,
                                choosing a wallet is easy and can be done in
                                minutes.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                        </li>
                        <li>
                          <Fade left delay={1400}>
                            <div className="content">
                              <h2>
                                <time>Get Monycoin</time>
                              </h2>
                              <p>
                                You can get Monycoin by accepting it as a
                                payment for goods and services. There are also
                                several ways you can buy Monycoin.
                              </p>
                              {/* <a className="btn btn-link">Read More</a> */}
                              <div
                                style={{ marginTop: '6vh', marginLeft: '62%' }}
                                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
                                onClick={() => navigate('/buy-mony')}
                              >
                                <a
                                  // href={() => false}
                                  // onClick={() => navigate('/buy-mony')}
                                  className="btn btn-primary w-100 buy-mony-coin-btn"
                                >
                                  Buy Monycoin
                                </a>
                              </div>
                            </div>
                          </Fade>
                        </li>
                        <li>
                          <Fade right delay={1500}>
                            <div className="content">
                              <h2>
                                <time>Spend Monycoin</time>
                              </h2>
                              <p>
                                There are a growing number of services and
                                merchants accepting Monycoin all over the world.
                                Use Bitcoin to pay them and rate your experience
                                to help them gain more visibility.
                              </p>
                              <a className="btn btn-link">Read More</a>
                            </div>
                          </Fade>
                        </li>
                      </ul>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetStarted
