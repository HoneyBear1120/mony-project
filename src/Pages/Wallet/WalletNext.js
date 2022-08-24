import React, { useEffect } from 'react'
import {
  HomeShape,
  AndroidIcon,
  AppleIcon,
  LinuxIcon,
  MicrosoftIcon,
  Lock,
} from '../../Components/Media'
import { useNavigate } from 'react-router-dom'
import { seo } from '../../Helpers/Seo'
import Fade from 'react-reveal/Fade'

function WalletNext() {
  let navigate = useNavigate()
  useEffect(() => {
    seo({ title: 'Mony Wallet - Wallet Next' })
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
        <div className="container pt-lg-5 ps-0 pe-0">
          <div className="row pt-5 m-auto">
            <div className="col-xxl-8 col-xl-10 m-auto">
              <Fade ssrFadeout delay={1000} effectOut="fadeOutLeft">
                <div className="text-center">
                  <h5 className="mb-5">
                    Select a wallet to store your MONYcoin so you can start
                    transacting on the network.
                  </h5>
                </div>
              </Fade>
            </div>
            <div className="col-xxl-12">
              <div className="dark-accordion">
                <div className="accordion" id="accordionExample">
                  <Fade ssrFadeout delay={700} effectOut="fadeOutLeft">
                    <div className="accordion-item">
                      <Fade ssrFadeout delay={500} effectOut="fadeOutLeft">
                        <div className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What’s your operating system?
                          </button>
                        </div>
                      </Fade>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <Fade
                            ssrFadeout
                            top
                            delay={1000}
                            effectOut="fadeOutLeft"
                          >
                            <div className="mb-3">
                              <div className="body-head mb-3">
                                <div className="title mb-3">Mobile Wallets</div>
                                <div className="ioc-lg me-2">
                                  <img src={AndroidIcon} alt="icon-android" />
                                </div>
                                <div className="ioc-lg me-2">
                                  <img src={AppleIcon} alt="icon-apple" />
                                </div>
                              </div>
                              <div className="row mb-md-2">
                                <Fade
                                  ssrFadeout
                                  left
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-md-0 mb-3">
                                    <ul className="do-ul-list">
                                      <li>
                                        Portable and convenient; ideal when
                                        making transactions face-to-face
                                      </li>
                                      <li>
                                        Designed to use QR codes to make quick
                                        and seamless transactions
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                                <Fade
                                  ssrFadeout
                                  right
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <ul className="dose-ul-list">
                                      <li>
                                        App marketplaces can delist/remove
                                        wallet making it difficult to receive
                                        future updates
                                      </li>
                                      <li>
                                        Damage or loss of device can potentially
                                        lead to loss of funds
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                          </Fade>
                          <Fade
                            ssrFadeout
                            top
                            delay={1500}
                            effectOut="fadeOutLeft"
                          >
                            <div className="mb-3">
                              <div className="body-head mb-3">
                                <div className="title mb-3">
                                  Desktop Wallets
                                </div>
                                <div className="ioc-lg me-2">
                                  <img src={LinuxIcon} alt="icon-linux" />
                                </div>
                                <div className="ioc-lg me-2">
                                  <img src={AppleIcon} alt="icon-apple" />
                                </div>
                                <div className="ioc-lg me-2">
                                  <img
                                    src={MicrosoftIcon}
                                    alt="icon-microsoft"
                                  />
                                </div>
                              </div>
                              <div className="row mb-md-2">
                                <Fade
                                  ssrFadeout
                                  left
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-md-0 mb-3">
                                    <ul className="do-ul-list">
                                      <li>
                                        Environment enables users to have
                                        complete control over funds{' '}
                                      </li>
                                      <li>
                                        Some desktop wallets offer hardware
                                        wallet support, or can operate as full
                                        nodes
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                                <Fade
                                  ssrFadeout
                                  right
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <ul className="dose-ul-list">
                                      <li>
                                        Difficult to utilize QR codes when
                                        making transactions
                                      </li>
                                      <li>
                                        Susceptible to bitcoin-stealing
                                        malware/spyware/viruses
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                          </Fade>
                          <Fade
                            ssrFadeout
                            top
                            delay={1000}
                            effectOut="fadeOutLeft"
                          >
                            <div className="mb-3">
                              <div className="body-head mb-3">
                                <div className="title mb-3">
                                  Hardware Wallets
                                </div>
                                <div className="ioc-lg me-2">
                                  <img src={Lock} alt="icon-lock" />
                                </div>
                              </div>
                              <div className="row mb-md-2">
                                <Fade
                                  ssrFadeout
                                  left
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-md-0 mb-3">
                                    <ul className="do-ul-list">
                                      <li>
                                        One of the most secure methods to store
                                        funds
                                      </li>
                                      <li>
                                        Ideal for storing large amounts of
                                        bitcoin
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                                <Fade
                                  ssrFadeout
                                  right
                                  delay={1000}
                                  effectOut="fadeOutLeft"
                                >
                                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <ul className="dose-ul-list">
                                      <li>
                                        Difficult to use while mobile; not
                                        designed for scanning QR codes
                                      </li>
                                      <li>
                                        Loss of device without proper backup can
                                        make funds unrecoverable
                                      </li>
                                    </ul>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                          </Fade>
                          <div className="border-top d-flex align-items-center pt-4 mb-3 flex-wrap">
                            <Fade
                              ssrFadeout
                              right
                              delay={1700}
                              effectOut="fadeOutLeft"
                            >
                              <a
                                // onClick={() => navigate('/wallet-filter')}
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
                                onClick={() => navigate('/wallet-filter')}
                                className="btn btn-primary ms-auto btn-md"
                              >
                                Next
                              </a>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade ssrFadeout top delay={1200} effectOut="fadeOutLeft">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How much do you know about Bitcoin?
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade ssrFadeout top delay={1700} effectOut="fadeOutLeft">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Which criteria are important to you?
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </Fade>
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

export default WalletNext
