import React, { useEffect } from 'react'
import { seo } from '../../Helpers/Seo'
import {
  HomeShape,
  TimerIcon,
  ArrowLeftBorder,
  MonyIcon,
} from '../../Components/Media'
import { Fade, Flip, LightSpeed, Zoom } from 'react-reveal'
import { useNavigate } from 'react-router-dom'
function BuyMonyNext() {
  const navigate = useNavigate()
  useEffect(() => {
    seo({ title: 'Buy Mony Next' })
  }, [])

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
                  <h3>How to buy Monycoin</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      {/* <!-- slider section start --> */}
      <section className="border-top pt-md-5 pt-4">
        <div className="container  ps-0 pe-0">
          <div className="row m-auto">
            <div className="col-xxl-8 col-xl-10 m-auto">
              <div className="text-center">
                <div className="row">
                  <div className="col-xxl-8 col-lg-7 m-auto">
                    <div className="card secounday-card">
                      <div className="card-body text-start p-4">
                        <LightSpeed left>
                          <div className="d-flex align-items-center mb-2">
                            <div
                              className="flex-shrink-0 cp"
                              onClick={() => navigate('/buy-mony')}
                            >
                              <div className="icon-sm">
                                <img
                                  src={ArrowLeftBorder}
                                  alt="arrow-left-white"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">Enter Wallet Address</h6>
                            </div>
                          </div>
                        </LightSpeed>
                        <Zoom>
                          <p className="color_light_white">
                            Please enter your wallet address accurately. Only
                            enter the address of a wallet that you own and to
                            which you have access.
                          </p>
                        </Zoom>
                        <div className="mb-3 form-dark icon-input">
                          <LightSpeed left>
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Wallet Address
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter your MONY wallet addresses"
                                required
                              />
                              <Flip left forever={true} duration={3000}>
                                <span className="icon-input">
                                  <img src={MonyIcon} alt="mony-icon.svg" />
                                </span>
                              </Flip>
                            </div>
                          </LightSpeed>
                        </div>

                        <div className="d-flex flex-wrap mb-3">
                          <div className="title">Summary</div>
                          <div className="ms-auto">
                            <div className="d-inline-block">
                              <img src={TimerIcon} alt="icon-timer" />
                            </div>{' '}
                            Quote updates in 3s
                          </div>
                        </div>
                        <Fade top delay={500}>
                          <div className="d-flex flex-wrap color_light_white mb-3">
                            <small className="title">Mony Price</small>
                            <small className="ms-auto">£32,229.53</small>
                          </div>
                        </Fade>
                        <Fade top delay={700}>
                          <div className="d-flex flex-wrap color_light_white mb-3">
                            <small className="title">You Get</small>
                            <small className="ms-auto">0.0089 MONY</small>
                          </div>
                        </Fade>
                        <Fade top delay={900}>
                          <div className="d-flex flex-wrap color_light_white mb-3">
                            <a className="primary_link ms-auto">
                              <small>View fees</small>
                            </a>
                          </div>
                        </Fade>
                        <Fade top delay={1100}>
                          <div className="d-flex flex-wrap border-top pt-3">
                            <div className="title">Total</div>
                            <div className="ms-auto">£299.96</div>
                          </div>
                        </Fade>
                      </div>
                      <Fade bottom delay={1400}>
                        <div className="card-footer border-0 mb-3 mt-3">
                          <a
                            href="#"
                            type="submit"
                            className="btn btn-primary ms-auto btn-md mb-3"
                          >
                            Continue
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- slider details section end  --> */}
    </>
  )
}

export default BuyMonyNext
