import React from 'react'
import { ShapeBg, Slider1, Slider2, Slider3 } from '../Media'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import './style.css'
const homeCarouselSettings = {
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  // fade: true,
  autoplay: true,
  // fade: true,
  centerMode: true,
  centerPadding: '100px',
  speed: 2000,
  pauseOnHover: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '60px',
      },
    },
    {
      breakpoint: 991,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
      },
    },
  ],
}
function SliderImage() {
  return (
    <>
      <section className="home_slider">
        <div>
          <div style={{ paddingTop: '40px' }}>
            <div className="container">
              <div className="row">
                <Fade bottom delay={1700} effectOut="fadeOutLeft">
                  <div className="col-md-12 mt-5">
                    <h2>Trusted by Millions</h2>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="container-fluid position-relative mt-md-5 mt-3">
              <div className="row">
                <div className="shape_bg">
                  <img src={ShapeBg} alt="shape bg" />
                </div>
                <div className="offset-md-3 offset-5 col-md-9 col-7 slider_line pe-0">
                  <div className="devider">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <Slider
                    {...homeCarouselSettings}
                    className=" slider home-carousel"
                  >
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider2} alt="slider_2" />
                        </div>
                        <h4>80.89M</h4>
                        <p>Marketplace Volume</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider1} alt="slider_1" />
                        </div>
                        <h4>2.5M+</h4>
                        <p>Wallet Installs</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider3} alt="slider_3" />
                        </div>
                        <h4>400+</h4>
                        <p>Users Worldwide</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider2} alt="slider_2" />
                        </div>
                        <h4>80.89M</h4>
                        <p>Marketplace Volume</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider1} alt="slider_1" />
                        </div>
                        <h4>2.5M+</h4>
                        <p>Wallet Installs</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="vertial_divider"></div>
                      <div className="slider_div">
                        <div className="icon-md mb-3">
                          <img src={Slider3} alt="slider_3" />
                        </div>
                        <h4>400+</h4>
                        <p>Users Worldwide</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderImage
