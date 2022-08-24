import React, { useEffect } from 'react'
import Slider from 'react-slick/lib/slider'
import { seo } from '../../Helpers/Seo'
// import './style.css'
import { HomeShape } from '../../Components/Media'
import { Fade } from 'react-reveal'
import './style.css'
const mission_statement_settings = {
  arrows: false,
  // infinite: true,
  centerMode: true,
  swipeToSlide: true,
  autoplay: true,
  speed: 2500,
  // pauseOnHover: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  centerPadding: '100px',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 1025,
      centerPadding: '0',
      slidesToShow: 3,
      slidesToScroll: 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
}

function MissionStatements() {
  useEffect(() => {
    seo({ title: 'Mony Wallet - Mission Statements' })
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
                  <h3>defiMONY Mission Statement</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      {/* <!-- slider section start --> */}
      <section className="border-top pt-md-5">
        <div className="container-fluid pt-lg-5 ps-0 pe-0">
          <div className="row pt-5 m-auto">
            <div className="col-xxl-12 col-xl-12 ps-md-0 pe-md-0">
              <div className="text-center">
                <Fade bottom delay={500}>
                  <span className="badge bg-primary badge-outline mb-3">
                    Welcome to Crypto
                  </span>
                  <h2>The currency of the future.</h2>
                </Fade>

                <div className="mt-5 pt-lg-5">
                  <Slider
                    {...mission_statement_settings}
                    className="mission-carousel"
                  >
                    <div className="item">
                      {/* <Fade delay={1500} left> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            Unique in the cryptocurrency universe, MONY is a
                            currency whose mission is to maintain secure value,
                            while fighting inflation.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} left> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> is a secure
                            ecosystem, where all transactions are stored on
                            multiple secure decentralized blockchains, both on
                            the BSC Binance blockchain and on its own dMONY
                            blockchain.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> maintains its
                            value and supports its currency by always being
                            ready to buy any and all outstanding coins at the
                            price listed on its website.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> also freezes
                            at least 20% of its currency to ensure its ability
                            to support and maintain a steady growth pattern in
                            the currency’s value.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> MONY
                            guarantees its security, by depositing 100% of the
                            funds necessary to buy all outstanding coins. These
                            funds are deposited in escrow accounts at major
                            financial institutions as well as with top liquidity
                            providers.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> is depositing
                            large sums of major cryptocurrencies (BTC, ETH,
                            USDT) with top liquidity providers, to ensure that
                            there is always sufficient equity to buy all coins
                            that are offered for sale.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> fights
                            inflation by providing all holders with daily
                            interest income, at a rate reported on its website.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div
                        className="card slider_grident"
                        style={{ height: '100%' }}
                      >
                        <div className="card-body p-4">
                          <p>
                            <span className="fw-bold">MONY</span> is fully
                            accessible, as all holders can withdraw or transfer
                            all of their funds at any time, with no extended
                            staking or wait time required before withdrawal.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>

                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p>
                            In its roadmap, MONY will be offering a full line of
                            payment services, including debit cards, integration
                            with electronic payment systems such as applePay,
                            direct payments to vendors, and seamless transfers
                            to major cryptocurrencies.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p>
                            Interest rate definition. (All calculations are done
                            at midnight UTC)
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p> R(d)=W(DST[d-1])+.01%W(INT)/H[t=0]</p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p>
                            Interest rate is calculated as the number of coins
                            in the DST (distribution) wallet of yesterday’s date
                            AND .01% of the balance in the INT wallet (which
                            holds approx 5% [actually 4.761905%] of all minted
                            coins), and dividing by the number of coins held by
                            holders at 0:00 UTC.
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p>
                            Example 21B coins minted - 1B moved into INT wallet.
                            W(I)=1B 10B coins held by Holders. H(t)=10B
                          </p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                    <div className="item">
                      {/* <Fade delay={1500} right> */}
                      <div className="card slider_grident h-100">
                        <div className="card-body p-4">
                          <p>Annual rate is .365% = daily interest is .001%</p>
                        </div>
                      </div>
                      {/* </Fade> */}
                    </div>
                  </Slider>
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

export default MissionStatements
