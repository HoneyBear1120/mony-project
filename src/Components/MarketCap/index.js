import React from 'react'
import { CoinIcon, Trade, GrowGreen } from '../Media'
import Fade from 'react-reveal/Fade'

function MarketCap() {
  return (
    <>
      <section className="pt-md-5 parallax-section">
        <div className="container pt-xl-5 mt-xl-5 ">
          <div className="row parallax-sub-div" style={{ paddingTop: '40px' }}>
            <Fade ssrFadeout bottom delay={1000} effectOut="fadeOutLeft">
              <div className="col-xxl-12 text-center mb-md-5 mb-400">
                <h2>Marketcap</h2>
              </div>
            </Fade>
            <Fade ssrFadeout right delay={2000} effectOut="fadeOutLeft">
              <div className="col-xxl-4 col-xl-4 col-lg-6 mb-xl-0 mb-4">
                <div className="card dark-card">
                  <div className="card-header">Mony Price</div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex">
                        <img src={CoinIcon} alt="coin-icon" className="me-2" />{' '}
                        <span className="color_secondary me-1">Mony</span>{' '}
                        <small>MY</small>
                      </div>
                      <div>
                        <img src={Trade} alt="trade" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5>$15,879.36</h5>
                      </div>
                      <div>
                        <img src={GrowGreen} alt="grow_green" />{' '}
                        <small className="color_green">28.93%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade ssrFadeout delay={1500} effectOut="fadeOutLeft">
              <div className="col-xxl-4 col-xl-4 col-lg-6 mb-xl-0 mb-4">
                <div className="card dark-card">
                  <div className="card-header">Guarantee Buy Price</div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex">
                        <img src={CoinIcon} alt="coin-icon" className="me-2" />{' '}
                        <span className="color_secondary me-1">Mony</span>{' '}
                        <small>MY</small>
                      </div>
                      <div>
                        <img src={Trade} alt="trade" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5>$14,999.28</h5>
                      </div>
                      <div>
                        <img src={GrowGreen} alt="grow_green" />{' '}
                        <small className="color_green">28.93%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade ssrFadeout left delay={2000} effectOut="fadeOutLeft">
              <div className="col-xxl-4 col-xl-4 col-lg-6 mb-xl-0 mb-4">
                <div className="card dark-card">
                  <div className="card-header">Escrow Balance</div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex">
                        <img src={CoinIcon} alt="coin-icon" className="me-2" />{' '}
                        <span className="color_secondary me-1">Mony</span>{' '}
                        <small>MY</small>
                      </div>
                      <div>
                        <img src={Trade} alt="trade" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5>$1,15,879.36</h5>
                      </div>
                      <div>
                        <img src={GrowGreen} alt="grow_green" />{' '}
                        <small className="color_green">28.93%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}

export default MarketCap
