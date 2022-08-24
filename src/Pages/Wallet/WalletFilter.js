import React, { useState, useRef, useEffect } from 'react'
import {
  HomeShape,
  FilterIcon,
  InfoIcon,
  AndroidIcon,
  AppleIcon,
  LinuxIcon,
  MicrosoftIcon,
  Lock,
  WalletMatte,
} from '../../Components/Media'
import { seo } from '../../Helpers/Seo'
import { Fade, Flip, Slide } from 'react-reveal'
function WalletFilter() {
  const [toggle, setToggle] = useState(false)
  const [toggleListArray, setToggleListArray] = useState([])

  useEffect(() => {
    seo({ title: 'Mony Wallet - Wallet Filter' })
  })

  const handleCloseOpenToggle = (e, str) => {
    e.preventDefault()
    if (toggleListArray.includes(str)) {
      let filterToggle = toggleListArray.filter((value) => value != str)
      setToggleListArray(filterToggle)
    } else {
      toggleListArray.push(str)
      setToggleListArray([...toggleListArray])
    }
  }

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
      <section className="border-top pt-lg-5">
        <div className="container ps-0 pe-0">
          <div className="row  m-auto">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="filter_button d-lg-none d-inline-block">
                <button
                  className="filter-toggle btn btn-secondary mt-3 mb-3"
                  onClick={() => setToggle(!toggle)}
                >
                  <img src={FilterIcon} alt="icon-filter" />
                  &nbsp;Filter
                </button>
              </div>
              <div
                className={`dark-accordion-secoundary filter_div ${
                  toggle ? 'toggle-active' : ''
                }`}
              >
                <div className="accordion">
                  <div className="accordion-item">
                    <Fade ssrFadeout delay={500} effectOut="fadeOutLeft">
                      <div
                        onClick={(e) => handleCloseOpenToggle(e, 'collapseOne')}
                        className="accordion-header"
                        id="headingOne"
                      >
                        <button
                          className={`accordion-button ${
                            toggleListArray.includes('collapseOne')
                              ? 'collapsed '
                              : ''
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Operating System
                        </button>
                      </div>
                    </Fade>

                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse ${
                        toggleListArray.includes('collapseOne')
                          ? 'hide'
                          : 'show'
                      }`}
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body m-4 mt-0 mb-0 p-0 border-bottom pb-3">
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 mb-3 ">
                            <Fade
                              ssrFadeout
                              delay={200}
                              effectOut="fadeOutLeft"
                            >
                              <div className="title mb-2">
                                Mobile{' '}
                                <div
                                  className="d-inline-block"
                                  data-bs-toggle="tooltip"
                                  title="Simple tooltip"
                                >
                                  <img src={InfoIcon} alt="icon-info" />
                                </div>
                              </div>
                            </Fade>

                            <div className="list d-flex align-item-center">
                              <Fade
                                ssrFadeout
                                bottom
                                delay={300}
                                effectOut="fadeOutLeft"
                              >
                                <div className="icon-lsm">
                                  <img src={AndroidIcon} alt="android" />
                                </div>
                                <div className="icon-lsm">
                                  <img src={AppleIcon} alt="apple" />
                                </div>
                              </Fade>
                            </div>
                          </div>

                          <div className="col-xxl-6 col-xl-6 mb-3">
                            <Fade
                              ssrFadeout
                              delay={400}
                              effectOut="fadeOutLeft"
                            >
                              <div className="title mb-2">
                                Desktop{' '}
                                <div
                                  className="d-inline-block"
                                  data-bs-toggle="tooltip"
                                  title="Simple tooltip"
                                >
                                  <img src={InfoIcon} alt="icon-info" />
                                </div>
                              </div>
                            </Fade>

                            <div
                              className="list"
                              style={{ display: 'flex', alignItem: 'center' }}
                            >
                              <Fade
                                ssrFadeout
                                delay={500}
                                bottom
                                effectOut="fadeOutLeft"
                              >
                                <div className="icon-lsm">
                                  <img src={LinuxIcon} alt="linux" />
                                </div>
                                <div className="icon-lsm">
                                  <img src={AppleIcon} alt="apple" />
                                </div>
                                <div className="icon-lsm">
                                  <img src={MicrosoftIcon} alt="window" />
                                </div>
                              </Fade>
                            </div>
                          </div>

                          <div className="col-xxl-6">
                            <Fade
                              ssrFadeout
                              delay={1000}
                              effectOut="fadeOutLeft"
                            >
                              <div className="title mb-2">
                                Hardware{' '}
                                <div
                                  className="d-inline-block"
                                  data-bs-toggle="tooltip"
                                  title="Simple tooltip"
                                >
                                  <img src={InfoIcon} alt="icon-info" />
                                </div>
                              </div>
                            </Fade>
                            <div className="list">
                              <Fade
                                ssrFadeout
                                delay={500}
                                bottom
                                effectOut="fadeOutLeft"
                              >
                                <div className="icon-lsm">
                                  <img src={Lock} alt="linux" />
                                </div>
                              </Fade>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <Fade ssrFadeout delay={700} effectOut="fadeOutLeft">
                      <div
                        onClick={(e) => handleCloseOpenToggle(e, 'collapseTwo')}
                        className="accordion-header"
                        id="headingTwo"
                      >
                        <button
                          type="button"
                          className={`accordion-button ${
                            toggleListArray.includes('collapseTwo')
                              ? 'collapsed '
                              : ''
                          }`}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          User Type
                        </button>
                      </div>
                    </Fade>
                    <div
                      id="collapseTwo"
                      className={`accordion-collapse collapse ${
                        toggleListArray.includes('collapseTwo')
                          ? 'hide'
                          : 'show'
                      }`}
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body m-4 mt-0 mb-0 p-0 border-bottom pb-3">
                        <Fade
                          bottom
                          ssrFadeout
                          delay={500}
                          effectOut="fadeOutLeft"
                        >
                          <div className="form-check radio-round">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              New{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>

                          <div className="form-check radio-round">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              // checked =
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Experienced{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <Fade ssrFadeout delay={700} effectOut="fadeOutLeft">
                      <div className="accordion-header" id="headingThree">
                        <button
                          className={`accordion-button ${
                            toggleListArray.includes('collapseThree')
                              ? 'collapsed '
                              : ''
                          }`}
                          onClick={(e) =>
                            handleCloseOpenToggle(e, 'collapseThree')
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Criteria
                        </button>
                      </div>
                    </Fade>

                    <div
                      id="collapseThree"
                      className={`accordion-collapse collapse ${
                        toggleListArray.includes('collapseThree')
                          ? 'hide'
                          : 'show'
                      }`}
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body m-4 mt-0 mb-0 p-0 border-bottom pb-3">
                        <Fade
                          bottom
                          ssrFadeout
                          delay={500}
                          effectOut="fadeOutLeft"
                        >
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Control{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Validation{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked1"
                            >
                              Transparency{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked2"
                            >
                              Environment{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked3"
                            >
                              Privacy{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked4"
                            >
                              Fees{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <Fade ssrFadeout delay={700} effectOut="fadeOutLeft">
                      <div className="accordion-header" id="headingFour">
                        <button
                          className={`accordion-button ${
                            toggleListArray.includes('collapsefour')
                              ? 'collapsed '
                              : ''
                          }`}
                          onClick={(e) =>
                            handleCloseOpenToggle(e, 'collapsefour')
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapseforu"
                        >
                          Features
                        </button>
                      </div>
                    </Fade>
                    <div
                      id="collapsefour"
                      className={`accordion-collapse collapse ${
                        toggleListArray.includes('collapsefour')
                          ? 'hide'
                          : 'show'
                      }`}
                      aria-labelledby="headingFour"
                    >
                      <div className="accordion-body m-4 mt-0 mb-0 p-0 pb-3">
                        <Fade
                          bottom
                          ssrFadeout
                          delay={500}
                          effectOut="fadeOutLeft"
                        >
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault5"
                            >
                              2FA{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked6"
                            >
                              Bech32{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked7"
                            >
                              Full Node{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked8"
                            >
                              Hardware Wallet{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked9"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked9"
                            >
                              Legacy Addresses{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked10"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked10"
                            >
                              Lightning{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked11"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked11"
                            >
                              Multisig{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                          <div className="form-check check-round">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked12"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked12"
                            >
                              SegWit{' '}
                              <div
                                className="d-inline-block"
                                data-bs-toggle="tooltip"
                                title="Simple tooltip"
                              >
                                <img src={InfoIcon} alt="icon-info" />
                              </div>
                            </label>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="min-info-section text-center dark-accordion-secoundary d-flex align-items-center justify-content-center flex-column">
                <Flip left delay={1000}>
                  <img src={WalletMatte} alt="Wallet_perspective_matte" />
                </Flip>
                <Fade delay={1000} bottom>
                  <h6 className="mt-3 mb-3">Browse wallets</h6>
                  <p className="color_light_white">
                    Use the wallet selector to find wallets that match your
                    search criteria.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- slider details section end  --> */}
    </>
  )
}

export default WalletFilter
