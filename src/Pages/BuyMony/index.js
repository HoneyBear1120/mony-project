import React, { useEffect } from 'react'
import { HomeShape, TimerIcon } from '../../Components/Media'
import { useNavigate } from 'react-router-dom'
import { seo } from '../../Helpers/Seo'
import { Fade, LightSpeed, Slide } from 'react-reveal'
function BuyMony() {
  let navigate = useNavigate()

  useEffect(() => {
    seo({ title: 'Buy Mony' })
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
              <Fade bottom delay={1500}>
                <div className="mt-5 pt-5 text-start">
                  <div className="mt-md-5 mb--5">
                    <h3>How to buy Monycoin</h3>
                  </div>
                </div>
              </Fade>
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
                    <Fade bottom delay={500}>
                      <div className="card secounday-card">
                        <div className="card-body text-start p-4">
                          <Fade bottom delay={1000}>
                            <h6>Buy MONY</h6>
                          </Fade>
                          <div className="mb-3 form-dark">
                            <div className="d-flex flex-wrap">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Amount
                              </label>
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label ms-auto"
                              >
                                MONY/GBP
                              </label>
                            </div>
                            <Fade left delay={1500}>
                              <div className="quantity">
                                <input
                                  type="number"
                                  min="1"
                                  step="1"
                                  defaultValue="1"
                                  className="form-control"
                                />
                              </div>
                            </Fade>
                            {/* <!-- <input type="number" data-type="currency"  className="form-control" id="exampleInputPassword1" value="0"> --> */}
                          </div>
                          <LightSpeed left delay={1500}>
                            <div className="d-flex flex-wrap mb-3">
                              <div className="title">Summary</div>
                              <div className="ms-auto">
                                <div className="d-inline-block">
                                  <img src={TimerIcon} alt="icon-timer" />
                                </div>{' '}
                                Quote updates in 3s
                              </div>
                            </div>
                          </LightSpeed>
                          <LightSpeed left delay={1700}>
                            <div className="d-flex flex-wrap color_light_white mb-3">
                              <small className="title">Mony Price</small>
                              <small className="ms-auto">£32,229.53</small>
                            </div>
                          </LightSpeed>
                          <LightSpeed left delay={1800}>
                            <div className="d-flex flex-wrap color_light_white mb-3">
                              <small className="title">You Get</small>
                              <small className="ms-auto">0.0089 MONY</small>
                            </div>
                          </LightSpeed>
                          <LightSpeed left delay={1900}>
                            <div className="d-flex flex-wrap color_light_white mb-3">
                              <a className="primary_link ms-auto">
                                <small>View fees</small>
                              </a>
                            </div>
                          </LightSpeed>
                          <LightSpeed left delay={1800}>
                            <div className="d-flex flex-wrap border-top pt-3">
                              <div className="title">Total</div>
                              <div className="ms-auto">£299.96</div>
                            </div>
                          </LightSpeed>
                        </div>
                        <Fade delay={2000} top>
                          <div className="card-footer border-0 mb-3 mt-3">
                            <a
                              onClick={() => navigate('/buy-mony-next')}
                              // href=""
                              className="btn btn-primary ms-auto btn-md mb-3"
                            >
                              Continue
                            </a>
                            <p>By continuing you agree to our cookie policy.</p>
                          </div>
                        </Fade>
                      </div>
                    </Fade>
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

export default BuyMony
