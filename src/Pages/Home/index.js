import React, { Suspense, useState, useEffect, useMemo, useRef } from 'react'
import { Information, Slider, DepositMonyInformation } from '../../constant'
import {
  HomeShape,
  LeftFirstCoin,
  LeftSecondCoin,
  LeftThirdCoin,
  LeftFourthCoin,
  RightFirstCoin,
  RightSecondCoin,
  RightThirdCoin,
  RightFourthCoin,
  MainBannersCoin,
} from '../../Components/Media'
import MarketCap from '../../Components/MarketCap'
import { useNavigate, useLocation } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

function Home() {
  let navigate = useNavigate()
  const [rotation, setRotation] = useState(0)

  const tick = () => {
    const rotDeg = rotation + 0.04
    console.log('ROtDeg is WOrking', rotDeg)
    setRotation(rotDeg)
    requestAnimationFrame(tick)
  }

  return (
    <>
      {/* Banner Section Start */}
      <section
        className="banner-section parallax-section position-sticky top-0 left-0 right-0"
        id="trigger1"
        style={{ marginTop: '-78px' }}
      >
        {/* 1 */}

        <div
          className="container-fluid  parallax-div"
          style={{ minHeight: '0vh' }}
        >
          <div className="row parallax-sub-div">
            <div className="col-xxl-12 text-center position-relative">
              <h1 className="margin-top fw-normal">
                <span className="fw-bold">Mony</span>{' '}
                <span className="d-block fw-bold">
                  The Currency of the Future
                </span>
              </h1>
              <p className="color_secondary">
                Unique in the cryptocurrency universe, MONY is a currency whose{' '}
                <span className="d-md-block">
                  mission is to maintain a secure value, while fighting
                  inflation.
                </span>
              </p>
              <div className="hero_shape">
                <img src={HomeShape} alt="home_shape" />
              </div>
              <Zoom
                ssrFadeout
                effect="fadeInUp"
                effectOut="fadeOutLeft"
                duration={1000}
                wait={5000}
                count={1}
              >
                <div className="left_icon_1">
                  <img src={LeftFirstCoin} alt="left-first-coin" />
                </div>
                <div className="left_icon_2 mt-4">
                  <img src={LeftSecondCoin} alt="left-second-coin" />
                </div>
                <div className="left_icon_3">
                  <img src={LeftThirdCoin} alt="left-third-coin" />
                </div>
                <div className="left_icon_4">
                  <img src={LeftFourthCoin} alt="left-fourth-coin" />
                </div>
                <div className="right_icon_1" style={{ zIndex: '-1' }}>
                  <img src={RightFirstCoin} alt="right-first-coin" />
                </div>
                <div className="right_icon_2">
                  <img src={RightSecondCoin} alt="right-second-coin" />
                </div>
                <div className="right_icon_3">
                  <img src={RightThirdCoin} alt="right-third-coin" />
                </div>
                <div className="right_icon_4">
                  <img src={RightFourthCoin} alt="right-fourth-coin" />
                </div>
                <div className="main-banner">
                  <img src={MainBannersCoin} alt="main-banner-coin" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>

      <section className=" container parallax-section1">
        <div
          className=" row gx-lg-5 parallax-div"
          style={{
            position: 'absolute',
            width: '100%',
            bottom: '0%',
            height: '40vh',
            // background: "black",
          }}
        >
          <Fade ssrFadeout right delay={1000} effectOut="fadeOutLeft">
            <div
              style={{ marginTop: '6vh' }}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
            >
              <a
                onClick={() => navigate('/get-started')}
                className="btn btn-primary w-100"
                // href={() => false}
              >
                Get Started
              </a>
            </div>
          </Fade>
          <Fade ssrFadeout top delay={500} effectOut="fadeOutLeft">
            <div
              style={{ marginTop: '6vh' }}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
            >
              <a
                // href={() => false}
                onClick={() => navigate('/wallet')}
                className="btn btn-primary w-100"
              >
                Choose Your Wallet
              </a>
            </div>
          </Fade>
          <Fade ssrFadeout left delay={1000} effectOut="fadeOutLeft">
            <div
              style={{ marginTop: '6vh' }}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
            >
              <a
                // href={() => false}
                onClick={() => navigate('/buy-mony')}
                className="btn btn-primary w-100"
              >
                Buy MONY
              </a>
            </div>
          </Fade>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Button Section Start */}
      {/* {
        <section className="parallax-section" style={{ height: '28vh' }}>
          <div className="container parallax-div">
            <div className="row gx-lg-5 parallax-sub-div">
              <Fade ssrFadeout right delay={1500} effectOut="fadeOutLeft">
                <div
                  style={{ marginTop: '10vh' }}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
                >
                  <a
                    onClick={() => navigate('/get-started')}
                    className="btn btn-primary w-100"
                    href={() => false}
                  >
                    Get Started
                  </a>
                </div>
              </Fade>
              <Fade ssrFadeout top delay={500} effectOut="fadeOutLeft">
                <div
                  style={{ marginTop: '10vh' }}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
                >
                  <a
                    href={() => false}
                    onClick={() => navigate('/wallet')}
                    className="btn btn-primary w-100"
                  >
                    Choose Your Wallet
                  </a>
                </div>
              </Fade>
              <Fade ssrFadeout left delay={1500} effectOut="fadeOutLeft">
                <div
                  style={{ marginTop: '10vh' }}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-lg-0 mb-3"
                >
                  <a
                    href={() => false}
                    onClick={() => navigate('/buy-mony')}
                    className="btn btn-primary w-100"
                  >
                    Buy MONY
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      } */}
      {/* Button Section End */}

      {/* Info Section Start */}
      {/* <Zoom ssrFadeout effect="fadeInUp" delay={700} effectOut="fadeOutLeft"> */}
      {/* </Zoom> */}
      {/* Info Section Start */}

      <Information />
      <DepositMonyInformation />

      {/* Info Section Start */}
      {/* <Zoom ssrFadeout effect="fadeInUp" delay={1000} effectOut="fadeOutLeft"> */}
      <Slider />
      {/* </Zoom> */}
      {/* Info Section Start */}

      {/* Market Cap Section Start */}
      {/* <Zoom ssrFadeout effect="fadeInUp" delay={700} effectOut="fadeOutLeft"> */}
      <MarketCap />
      {/* </Zoom> */}
      {/* Market Cap Section Start */}
    </>
  )
}

export default Home
