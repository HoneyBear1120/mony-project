import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick/lib/slider'
import * as Scroll from 'react-scroll'

import { seo } from '../../Helpers/Seo'
import './style.css'
import {
  HomeShape,
  CustomerSlider,
  CustomerSlider1,
} from '../../Components/Media'
import { Fade, Zoom } from 'react-reveal'

const image_scroll_customer_settings = {
  arrows: false,
  // infinite: true,
  // centerMode: true,

  // slidesToShow: 1,
  // vertical: true,
  // verticalSwiping: true,
  // slidesToScroll: 1,
  focusOnSelect: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: '48px',
  responsive: [
    // {
    //   breakpoint: 992,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerPadding: '100px',
    //   },
    // },
  ],
}

function CustomerBenefits() {
  const scrollRef = useRef(null)
  const imgRef = useRef(null)
  const customer_settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    // focusOnSelect: true,
    speed: 3000,
    // centerMode: true,
    // centerPadding: '48px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        },
      },
    ],
  }
  function scroll(e) {
    if (scrollRef === null) return 0
    // window.scrollTo(1000, 1000)
    if (e.wheelDelta > 0) {
      scrollRef.current.slickNext()
      imgRef.current.slickNext()
      // next()
    } else {
      // prev()
      scrollRef.current.slickPrev()
      imgRef.current.slickPrev()
    }
  }

  // const handleControlScroll = (e) => {
  //   e.preventDefault()
  //   console.log('Event', e)
  // }
  useEffect(() => {
    seo({ title: 'Mony Wallet - Customer Benefits' })

    var fixed = document.getElementById('scrollsEffects')

    fixed.addEventListener(
      'touchmove',
      function (e) {
        console.log('Is That Working ')
        e.preventDefault()
      },
      false,
    )

    if (scrollRef == null) return 0
    window.addEventListener('wheel', scroll, true)
    // document.body.classList.add('my-class')

    return () => {
      window.removeEventListener('wheel', scroll, true)
      // document.body.classList.remove('my-class')
    }
  }, [])

  const handleScrolling = (str) => {
    console.log('String', str)
    if (str == 'start') {
      document.body.classList.add('my-class')
    } else {
      document.body.classList.remove('my-class')
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
              <div className="mt-5 pt-5 text-start">
                <Fade bottom delay={500}>
                  <div className="mt-md-5 mb--5">
                    <h3>Benefits to Holders of MONY</h3>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      <section
        className="border-top pt-md-5 pt-4 custom-section "
        // onWg
      >
        <div
          className="container ps-0 pe-0 scrolling-slide-effect"
          id="scrollsEffects"
        >
          <div className="row m-auto">
            <div className="col-xxl-12 col-xl-12 ps-md-0 pe-md-0">
              <div className="text-center">
                <div className="">
                  <div className="row align-items-center  ">
                    <div
                      className="col-xxl-6 col-xl-6 col-lg-6"
                      onMouseLeave={() => handleScrolling('stop')}
                      onMouseEnter={() => handleScrolling('start')}
                      // style={{ overflow: 'scroll' }}
                    >
                      <Slider
                        {...customer_settings}
                        ref={scrollRef}
                        // style={{ overflow: 'auto' }}
                        className="customer-carousel"
                      >
                        <div className="item">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>01 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Security
                              </span>
                              <h5>
                                the funds are safe and fully backed, with a
                                complete buyback guarantee
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>13 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Value appreciation
                              </span>
                              <h5>
                                the currency is designed with cutting-edge
                                algorithms to maintain its price trajectory and
                                appreciate steadily.
                              </h5>
                            </div>
                          </div>
                          {/* <div className=" mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div>
                          </div>
                        </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>12 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Transparency
                              </span>
                              <h5>
                                MONY is open source and publicly available to
                                view on the blockchain.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>11 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Availability
                              </span>
                              <h5>
                                the funds are always available with no staking
                                periods necessary.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>10 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Massive liquidity
                              </span>
                              <h5>
                                there are always lots of bids and offers for
                                your MONY from the top liquidity providers.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>

                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>09 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Privacy
                              </span>
                              <h5>
                                your funds are protected by hash addresses, with
                                your private information never exposed.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>08 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Ease of use
                              </span>
                              <h5>
                                deposit, withdraw or transfer funds much more
                                easily than traditional banking sources.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>07 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                P2P
                              </span>
                              <h5>
                                peer to peer direct purchase and exchange of
                                crypto and derivatives.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>06 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Daily Interest
                              </span>
                              <h5>Holders receive additional tokens daily.</h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>05 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Referral fees
                              </span>
                              <h5>
                                {' '}
                                introduce others to MONY, and both you and them
                                receive bonus tokens - the more you hold the
                                more you get (see table).
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>04 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Low transaction fees
                              </span>
                              <h5>
                                some of the lowest transaction fees in the
                                crypto universe.
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              <p>03 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Governance
                              </span>
                              <h5>
                                all holders have voting rights in the MONY
                                ecosystem.{' '}
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                        <div className="item">
                          <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0 font-22">
                              {/*  */}
                              <p>02 / 13</p>
                            </div>
                            <div className="flex-grow-1 ms-5 text-start">
                              <span className="badge bg-secondary badge-outline mb-3">
                                Services
                              </span>
                              <h5>
                                Debit cards, electronic payments, direct deposit
                                and more.{' '}
                              </h5>
                            </div>
                          </div>
                          {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5">
                            <div className="customer-carousel position-sticky top-0">
                              <img src={CustomerSlider} alt="customer-slider" />
                            </div> */}
                        </div>
                      </Slider>
                      {/* </Element> */}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 mt-lg-0 mt-5 set-position">
                      <div className="customer-carousel position-sticky top-0">
                        <Slider
                          {...image_scroll_customer_settings}
                          ref={imgRef}
                          // style={{ overflow: 'auto' }}
                          className="customer-carousel"
                        >
                          {/* <img
                            style={{
                              maxWidth: '70%',
                            }}
                            src={CustomerSlider1}
                            alt="customer-slider"
                          /> */}
                          <img
                            style={{
                              maxWidth: '70%',
                            }}
                            src={CustomerSlider}
                            alt="customer-slider"
                          />
                          {/* <img
                            style={{
                              maxWidth: '70%',
                            }}
                            src={CustomerSlider1}
                            alt="customer-slider"
                          /> */}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Element> */}
      {/* <!-- slider details section end  --> */}
    </>
  )
}

export default CustomerBenefits
