import React, { useEffect } from 'react'
import {
  HomeShape,
  Avatar,
  BlogDetails1,
  TradeImage1,
  TradeImage2,
  TradeImage3,
  SmallCategory1,
  SmallCategory2,
  SmallCategory3,
  SmallCategory4,
  ArrowRightWhite,
  ArrowLeftWhite,
  TradeChart,
  WhiteFaceBook,
  WhiteInstagram,
  WhiteTwitter,
  MonyIcon,
} from '../../Components/Media'
import { seo } from '../../Helpers/Seo'
function BlogDetails() {
  useEffect(() => {
    seo({ title: 'Blog-Details' })
  })
  return (
    <>
      {/* <!-- category section start --> */}
      <section className="banner-section min-inherit mb-md-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 text-center position-relative">
              <div className="hero_shape">
                <img src={HomeShape} alt="home_shape" />
              </div>
              <div className="mt-5 pt-4">
                <div className="d-flex flex-wrap align-items-center">
                  <nav className="dark_breadcrumb" aria-label="breadcrumb ">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href="#">Blog</a>
                      </li>
                    </ol>
                  </nav>
                  <a className="btn btn-secondary ms-auto">Back</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- category section end --> */}

      {/* <!-- blog details section start --> */}
      <section className="border-top pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8">
              <div className="blog-detail-header">
                <p className="color_light_white">5 Min Read</p>
                <h3>How Can I Use Lorem Ipsum Tool For My Website?</h3>
                <div className="d-flex align-items-center mt-5">
                  <div className="flex-shrink-0">
                    <div className="icon-md">
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="rounded-circle avatar"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    by Johnny Harper
                    <span className="d-block color_secondary">15/04/2022</span>
                  </div>
                </div>
              </div>
              <div className="blog-detail-body mt-5">
                <img src={BlogDetails1} alt="blog-detail" />
                <h5>How Can I Use Lorem Ipsum Tool For My Website?</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <h5>How Can I Use Lorem Ipsum Tool For My Website?</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <p>Disclaimer</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <p>
                  This article is for general purposes of information only and
                  no representation or warranty, either expressed or implied, is
                  made as to, and no reliance should be placed on, the fairness,
                  accuracy, completeness or correctness of this article or
                  opinions contained herein. Crypto are contracts replicating an
                  underlying stock or ETF. More information and the PRIIPs key
                  information document (KID) are available at{' '}
                  <a href="crypto.com">crypto.com</a>.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 mt-md-0 mt-4">
              <div className="card dark-card promo-section mb-4">
                <div className="card-body pt-3 pb-3 p-0 text-center">
                  <img
                    src={TradeChart}
                    alt="trade_chart"
                    className="trade-chart"
                  />
                  <h3>
                    Get <span className="green-grdient d-block">75% bonus</span>{' '}
                    with your <span className="d-block">deposit</span>
                  </h3>
                  <div className="d-flex justify-content-center mb-3 mt-3">
                    <div className="icon-md ms-4 me-4">
                      <img src={TradeImage1} alt="trade-image-1" />
                    </div>
                    <div className="icon-md ms-3 me-3">
                      <img src={TradeImage2} alt="trade-image-2" />
                    </div>
                    <div className="icon-md ms-3 me-3">
                      <img src={TradeImage3} alt="trade-image-3" />
                    </div>
                  </div>
                  <button className="mt-3 mb-3">open account</button>
                </div>
              </div>
              <div className="card primary-card mb-4">
                <div className="card-header border-bottom">
                  <h6 className="mb-0">Tags</h6>
                </div>
                <div className="card-body">
                  <div className="category min-auto d-flex flex-wrap">
                    <div className="category_inner">Education</div>
                    <div className="category_inner">Latest News</div>
                    <div className="category_inner">Marketplace</div>
                    <div className="category_inner">Business</div>
                  </div>
                </div>
              </div>
              <div className="card primary-card mb-4">
                <div className="card-header border-bottom">
                  <h6 className="mb-0">Related Posts</h6>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="icon-xl">
                        <img
                          src={SmallCategory1}
                          alt="small-category-1"
                          className="rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      What Is Meant By Lorem Ipsum In Website?
                      <small className="d-block color_secondary">
                        5 Min Read
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="icon-xl">
                        <img
                          src={SmallCategory2}
                          alt="small-category-2"
                          className="rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      What Is Meant By Lorem Ipsum In Website?
                      <small className="d-block color_secondary">
                        5 Min Read
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="icon-xl">
                        <img
                          src={SmallCategory3}
                          alt="small-category-3"
                          className="rounded"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      What Is Meant By Lorem Ipsum In Website?
                      <small className="d-block color_secondary">
                        5 Min Read
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 border-top border-bottom pt-4 pb-4">
            <div className="col-auto mb-md-0 mb-3">
              <a href="#" className="blog-links">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="icon-sm">
                      <img src={ArrowLeftWhite} alt="arrow-left-white" />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="d-block color_secondary">
                      Previous Post
                    </span>
                    <h6>How Lorem Ipsum Can Be Used?</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="ms-md-auto col-auto">
              <a href="#" className="blog-links">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 me-3">
                    <span className="d-block color_secondary">Next Post</span>
                    <h6>How Lorem Ipsum Can Be Used?</h6>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="icon-sm">
                      <img src={ArrowRightWhite} alt="arrow-right-white" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row mt-4 pb-4">
            <div className="col-auto ms-md-auto me-md-0 p-md-0 m-auto text-center">
              <div className="d-flex color_light_white flex-md-row flex-column">
                <span>Share this article on social media</span>
                <ul className="list-unstyled list_row padding-10 mb-0 mt-md-0 mt-2">
                  <li>
                    <a href="#">
                      <img src={WhiteFaceBook} alt="white-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={WhiteInstagram} alt="white-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={WhiteTwitter} alt="white-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog details section end  --> */}
    </>
  )
}

export default BlogDetails
