import React, { useEffect } from 'react'
import { HomeShape } from '../../Components/Media'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { seo } from '../../Helpers/Seo'
import Fade from 'react-reveal/Fade'
import { Zoom } from 'react-reveal'

function WalletMain() {
  let navigate = useNavigate()

  useEffect(() => {
    seo({ title: 'Mony Wallet - Wallet' })
  })

  return (
    <>
      <Outlet />
      {/* <!-- category section start --> */}
      <section className="banner-section min-inherit mb-md-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 position-relative">
              <div className="hero_shape">
                <img src={HomeShape} alt="home_shape" />
              </div>
              <Fade ssrFadeout delay={700} effectOut="fadeOutLeft">
                <div className="mt-5 pt-5 text-start">
                  <div className="mt-md-5 mb--5">
                    <h3>Choose Your Monycoin Wallet</h3>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      {/* <!-- slider section start --> */}
      <section className="border-top pt-md-5">
        <div className="container-fluid pt-lg-5 ps-0 pe-0">
          <div className="row pt-5 m-auto">
            <div className="col-xxl-8 col-xl-10 m-auto">
              <Fade
                effect="fadeInUp"
                bottom
                effectOut="fadeOutLeft"
                delay={300}
              >
                <div className="text-center">
                  <Fade ssrFadeout top delay={500} effectOut="fadeOutLeft">
                    <h5 className="mb-5">
                      Select a wallet to store your MONYcoin so you can start
                      transacting on the network.
                    </h5>
                  </Fade>
                  <Fade ssrFadeout top delay={1000} effectOut="fadeOutLeft">
                    <div className="row">
                      <div className="col-xxl-6 col-lg-6 m-auto">
                        <div className="card secounday-card">
                          <div className="card-body text-start p-4">
                            <h6>Let's help you find a MONYcoin wallet.</h6>
                            <p>
                              Answer the following questions to create a list of
                              wallets that meet your needs.
                            </p>
                          </div>
                          <Fade
                            ssrFadeout
                            top
                            delay={1500}
                            effectOut="fadeOutLeft"
                          >
                            <div className="card-footer border-0 d-flex align-items-center mb-3 flex-wrap">
                              <Fade
                                ssrFadeout
                                right
                                delay={1700}
                                effectOut="fadeOutLeft"
                              >
                                <a
                                  onClick={() => navigate('/wallet-filter')}
                                  className="btn btn-secoundary"
                                >
                                  Skip Helper
                                </a>
                              </Fade>
                              <Fade
                                ssrFadeout
                                left
                                delay={1700}
                                effectOut="fadeOutLeft"
                              >
                                <a
                                  onClick={() => navigate('/wallet-next')}
                                  className="btn btn-primary ms-auto btn-md"
                                >
                                  Next
                                </a>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- slider details section end  -->     */}
    </>
  )
}

export default WalletMain
