import React from 'react'
import { Wrapper4, Wrapper5, Wrapper6 } from '../Media'
import Fade from 'react-reveal/Fade'

function DepositMonyInfo() {
  return (
    // mt-5 mb-5 pt-xl-5 pb-xl-5
    <section className="info_section parallax-section">
      <div className="container parallax-div">
        <div className="parallax-sub-div" style={{ paddingTop: '40px' }}>
          <div className="row align-items-center">
            <div className="col-xxl-12 mb-3 mt-3">
              <span className="badge bg-primary badge-outline">
                Crypto Earn
              </span>
            </div>
            <Fade bottom delay={1700} effectOut="fadeOutLeft">
              <div className="col-xxl-6 col-lg-6 mb-md-0 mb-lg-3">
                <h2>
                  Deposit MONY <span className="d-block"> & Earn Interest</span>
                </h2>
              </div>
            </Fade>
            <Fade bottom delay={1700} effectOut="fadeOutLeft">
              <div className="col-xxl-6 col-lg-6 color_secondary text_justify">
                <p>
                  MONY is a secure ecosystem, where all transactions are stored on multiple secure decentralized blockchains, 
                  both on the BSC Binance blockchain and on its own dMONY blockchain.
                </p>
              </div>
            </Fade>
          </div>
          <div className="row  mt-3">
            <div className="col-xxl-6 col-lg-6 mb-md-0 mb-3">
              <div className="wrapper wrapper-div position-relative">
                <Fade ssrFadeout bottom delay={600} effectOut="fadeOutLeft">
                  <div className="wrapper-1">
                    <img src={Wrapper4} alt="wrapper-4" />
                  </div>
                </Fade>
                <Fade ssrFadeout left delay={700} effectOut="fadeOutLeft">
                  <div className="wrapper-2">
                    <img src={Wrapper5} alt="wrapper-5" />
                  </div>
                </Fade>
                <Fade ssrFadeout top delay={500} effectOut="fadeOutLeft">
                  <div className="wrapper-3">
                    <img src={Wrapper6} alt="wrapper-6" />
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 color_secondary">
              <div className="row">
                <div className="col-xxl-12 mb-xxl-5 mb-3">
                  <Fade ssrFadeout top delay={700} effectOut="fadeOutLeft">
                    <div className="dark-accordion active mb-md-5 mb-3">
                      <div className="d-flex align-items-center text-white mb-3">
                        <div className="flex-shrink-0 icon-lg">
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.2925 4.11168L6.86159 7.1534C6.57218 7.26991 6.25507 7.53199 6.00635 7.90198C5.75745 8.27221 5.63477 8.66466 5.63477 8.9724V14.8258C5.63477 20.8794 10.0513 26.6028 16.0992 28.2747C16.3661 28.3472 16.6634 28.3472 16.9304 28.2747C22.9782 26.6028 27.3948 20.8794 27.3948 14.8258L27.3948 14.8235L27.4081 8.9724C27.4079 8.66839 27.2843 8.27611 27.0328 7.90388C26.7812 7.53144 26.4622 7.26795 26.1771 7.15167L18.7503 4.11168C17.3261 3.53086 15.7167 3.53076 14.2925 4.11168ZM13.537 2.25988C15.4458 1.48108 17.597 1.48108 19.5059 2.25988L26.9325 5.2998C27.6602 5.59698 28.2686 6.16036 28.6901 6.78426C29.1117 7.40829 29.4081 8.18322 29.4081 8.9724L29.4081 8.97468L29.3948 14.8258C29.3942 21.811 24.3452 28.301 17.4611 30.203L17.4579 30.2038C16.8456 30.3708 16.1839 30.3708 15.5716 30.2038L15.5684 30.203C8.68393 28.3009 3.63477 21.8115 3.63477 14.8258V8.9724C3.63477 8.18681 3.92542 7.41259 4.34654 6.78617C4.76726 6.16032 5.37578 5.59641 6.11172 5.29928L13.537 2.25988ZM16.5147 12.332C15.5942 12.332 14.848 13.0782 14.848 13.9987C14.848 14.9192 15.5942 15.6654 16.5147 15.6654C17.4352 15.6654 18.1814 14.9192 18.1814 13.9987C18.1814 13.0782 17.4352 12.332 16.5147 12.332ZM12.848 13.9987C12.848 11.9737 14.4896 10.332 16.5147 10.332C18.5397 10.332 20.1814 11.9737 20.1814 13.9987C20.1814 15.6771 19.0537 17.0921 17.5146 17.5274V20.666C17.5146 21.2183 17.0669 21.666 16.5146 21.666C15.9624 21.666 15.5146 21.2183 15.5146 20.666V17.5273C13.9757 17.092 12.848 15.6771 12.848 13.9987Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-0">Secure & Insured</h5>
                        </div>
                      </div>
                      <p>
                        MONY is a secure ecosystem, where all transactions are stored on multiple secure decentralized blockchains, 
                        both on the BSC Binance blockchain and on its own dMONY blockchain.
                      </p>
                    </div>
                  </Fade>
                  <Fade ssrFadeout top delay={700} effectOut="fadeOutLeft">
                    <div className="dark-accordion active mb-md-5 mb-3">
                      <p>
                        MONY guarantees its security, by depositing 100% of the funds necessary to buy all outstanding coins. 
                        These funds are deposited in escrow accounts at major financial institutions as well as with top liquidity providers.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepositMonyInfo
