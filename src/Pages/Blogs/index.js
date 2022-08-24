import React, { useEffect } from 'react'
import { seo } from '../../Helpers/Seo'
import Slider from 'react-slick'
import {
  Category1,
  Category2,
  Category3,
  Category4,
  SearchIcon,
  ArrowRight,
  ArrowLeft,
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
} from '../../Components/Media'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { HomeShape } from '../../Components/Media'
import { Fade } from 'react-reveal'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <button
      onClick={onClick}
      style={{ position: 'absolute', top: '-94px', right: '113px' }}
      className="prev slick-arrow btn btn-link p-0"
    >
      {' '}
      <img src={ArrowRight} />{' '}
    </button>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <button
      onClick={onClick}
      style={{ position: 'absolute', top: '-94px', right: '150px' }}
      className="next slick-arrow btn btn-link p-0"
    >
      {' '}
      <img src={ArrowLeft} /> {/* {' '}
      <img src={ArrowRight} />{' '} */}
    </button>
  )
}

function Blogs() {
  const BlogsCarouselSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: '0',
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '0',
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
  useEffect(() => {
    seo({ title: 'Blogs' })
  })
  let navigate = useNavigate()

  return (
    <>
      {/* <!-- category section start --> */}
      <section className="banner-section min-inherit mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 text-center position-relative">
              <div className="hero_shape">
                <img src={HomeShape} alt="home_shape" />
              </div>
              <div className="mt-5 pt-5">
                <nav className="dark_breadcrumb" aria-label="breadcrumb ">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a>Blog</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <Fade bottom delay={1000}>
                <h3 className="text-start">Crypto Blog</h3>
              </Fade>
              <div className="row mt-4">
                <div className="col-auto">
                  <div className="d-flex flex-wrap category">
                    <Fade top delay={500}>
                      <div className="p-2">Category</div>
                    </Fade>
                    <div className="categories d-flex flex-lg-wrap flex-wrap">
                      <Fade right delay={1000}>
                        <div className="category_inner">
                          <div className="icon-sm">
                            <img src={Category1} alt="category_1" />
                          </div>
                          Education
                        </div>
                      </Fade>
                      <Fade top delay={500}>
                        <div className="category_inner">
                          <div className="icon-sm">
                            <img src={Category2} alt="category_2" />
                          </div>
                          Latest News
                        </div>
                      </Fade>
                      <Fade top delay={500}>
                        <div className="category_inner">
                          <div className="icon-sm">
                            <img src={Category3} alt="category_3" />
                          </div>
                          Marketplace
                        </div>
                      </Fade>
                      <Fade left delay={1000}>
                        <div className="category_inner">
                          <div className="icon-sm">
                            <img src={Category4} alt="category_4" />
                          </div>
                          Business
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                {/* src={SearchIcon} */}
                <div className="col-md-auto col-12 ms-auto">
                  <Fade bottom delay={1000}>
                    <div className="input-group icon-search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn" type="button">
                          <img src={SearchIcon} alt="search-icon" />
                        </button>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      {/* <!-- blog slider section start --> */}
      <section className="category_slider border-top pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="d-flex">
                <Fade bottom delay={500}>
                  <h5>Featured Post</h5>
                </Fade>

                <div className="ms-auto">
                  {/* <button className="prev slick-arrow btn btn-link p-0">
                    {' '}
                    <img src={ArrowLeft} />{' '}
                  </button>
                  <button className="next slick-arrow btn btn-link p-0">
                    {' '}
                    <img src={ArrowRight} />{' '}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-lg-5 mt-3">
          <div className="row">
            <div className="col-xxl-12 p-0">
              <Slider
                {...BlogsCarouselSettings}
                className="regular blog-carousel"
              >
                <div className="item">
                  <Fade delay={500}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog1}
                        className="card-img-top"
                        alt="blog-image-1"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="item">
                  <Fade delay={600}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog2}
                        className="card-img-top"
                        alt="blog-image-2"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="item">
                  <Fade delay={700}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog3}
                        className="card-img-top"
                        alt="blog-image-3"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="item">
                  <Fade delay={800}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog2}
                        className="card-img-top"
                        alt="blog-image-2"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="item">
                  <Fade delay={900}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog4}
                        className="card-img-top"
                        alt="blog-image-4"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="item">
                  <Fade delay={1000}>
                    <div className="card primary-card h-100">
                      <img
                        src={Blog4}
                        className="card-img-top"
                        alt="blog-image-4"
                      />
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool For My Website?
                        </h6>
                        <p className="card-text">
                          The word Lorem Ipsum is derived from the Latin word
                          which means “pain itself”. It is a kind of a text...
                        </p>
                        <a
                          onClick={() => navigate('/blogs-details')}
                          className="btn btn-link"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog slider section end  --> */}

      {/* <!-- blog section start --> */}
      <section className="blog-section mt-5 pt-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h5>Latest News</h5>
            </div>
            <div className="col-auto ms-auto">
              <a className="btn btn-link">All Latest News Articles</a>
            </div>
          </div>
          <div className="row mt-4">
            <Fade right delay={1500}>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-3">
                <div className="card primary-card h-100">
                  <img
                    src={Blog5}
                    className="card-img-top"
                    alt="blog-image-5"
                  />
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <p className="card-text">
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text...
                    </p>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay={700}>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-3">
                <div className="card primary-card h-100">
                  <img
                    src={Blog6}
                    className="card-img-top"
                    alt="blog-image-6"
                  />
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <p className="card-text">
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text...
                    </p>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            </Fade>
            <div className="col-xl-4 mb-lg-0 mb-3">
              <Fade top delay={1000}>
                <div className="card primary-card mb-4 h-48">
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </Fade>
              <Fade bottom delay={1000}>
                <div className="card primary-card h-48">
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section end--> */}

      {/* <!-- blog section start --> */}
      <section className="blog-section mt-5 pt-xl-5">
        <div className="container">
          <div className="card-primary-color p-4">
            <div className="row">
              <div className="col-auto">
                <h5>Marketplace</h5>
              </div>
              <div className="col-auto ms-auto">
                <a className="btn btn-link">All Marketplace Articles</a>
              </div>
            </div>
            <div className="row mt-4">
              <Fade bottom delay={1000}>
                <div className="col-xl-8 mb-xl-0 mb-3">
                  <div className="card primary-card h-100">
                    <img
                      src={Blog7}
                      className="card-img-top"
                      alt="blog-image-7"
                    />
                    <div className="card-body">
                      <small>5 Min Read</small>
                      <h6 className="card-title mt-3 mb-3">
                        How Can I Use Lorem Ipsum Tool
                      </h6>
                      <p className="card-text">
                        The word Lorem Ipsum is derived from the Latin word
                        which means “pain itself”. It is a kind of a text...
                      </p>
                      <a className="btn btn-link">Read More</a>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={500}>
                <div className="col-xl-4 mb-xl-0 mb-3">
                  <Fade top delay={1000}>
                    <div className="card primary-card mb-4 h-48">
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool
                        </h6>
                        <a className="btn btn-link">Read More</a>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom delay={1000}>
                    <div className="card primary-card h-48">
                      <div className="card-body">
                        <small>5 Min Read</small>
                        <h6 className="card-title mt-3 mb-3">
                          How Can I Use Lorem Ipsum Tool
                        </h6>
                        <a className="btn btn-link">Read More</a>
                      </div>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section end--> */}

      {/* <!-- blog section start --> */}
      <section className="blog-section mt-5 pt-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h5>Business</h5>
            </div>
            <div className="col-auto ms-auto">
              <a className="btn btn-link">All Business Articles</a>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <Fade right delay={1700}>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-3">
                <div className="card primary-card h-100">
                  <img
                    src={Blog5}
                    className="card-img-top"
                    alt="blog-image-5"
                  />
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <p className="card-text">
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text...
                    </p>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-3">
                <div className="card primary-card h-100">
                  <img
                    src={Blog8}
                    className="card-img-top"
                    alt="blog-image-8"
                  />
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <p className="card-text">
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text...
                    </p>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left delay={1700}>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-3">
                <div className="card primary-card h-100 ">
                  <img
                    src={Blog6}
                    className="card-img-top"
                    alt="blog-image-6"
                  />
                  <div className="card-body">
                    <small>5 Min Read</small>
                    <h6 className="card-title mt-3 mb-3">
                      How Can I Use Lorem Ipsum Tool
                    </h6>
                    <p className="card-text">
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text...
                    </p>
                    <a className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* <!-- blog section end--> */}
    </>
  )
}

export default Blogs
