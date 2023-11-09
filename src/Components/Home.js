import { Link } from "react-router-dom";

function Home(){
    return<>
   <div>
    {/* slider section */}
    <section style={{marginTop:"50px"}} className="slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      For All Your <br/>
                      Furniture Needs
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <Link to="" className="btn1">
                        Contact Us
                      </Link>
                      <Link to="" className="btn2">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="user_assets/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      For All Your <br/>
                      Furniture Needs
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <Link to="" className="btn1">
                        Contact Us
                      </Link>
                      <Link to="" className="btn2">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="user_assets/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      For All Your <br/>
                      Furniture Needs
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <Link to="" className="btn1">
                        Contact Us
                      </Link>
                      <Link to="" className="btn2">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="user_assets/images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel" data-slide-to="1"></li>
          <li data-target="#customCarousel" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
    {/* end slider section */}
  </div>

  {/* furniture section */}

  <section className="furniture_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Furniture
        </h2>
        <p>
          which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f1.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                brown Chair Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 100.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f2.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Double Bed Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f3.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                House Chair Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f4.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                brown Table Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 100.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f5.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Blue Chair Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/f6.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Brown Table Design
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <Link to="">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* end furniture section */}


  {/* about section */}

  <section className="about_section layout_padding long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="user_assets/images/about-img.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
            </p>
            <Link to="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* end about section */}

  {/* blog section */}

  <section className="blog_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Latest Blog
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/b1.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Look even slightly believable. If you are
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <Link to="">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/b2.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Anything embarrassing hidden in the middle
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <Link to="">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="user_assets/images/b3.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Molestias magni natus dolores odio commodi. Quaerat!
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <Link to="">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* end blog section */}

  {/* client section */}

  <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Testimonial
        </h2>
      </div>
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="user_assets/images/client.jpg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="user_assets/images/client.jpg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="user_assets/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>
                        Siaalya
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <Link className="carousel-control-prev" to="#carouselExample2Controls" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </Link>
          <Link className="carousel-control-next" to="#carouselExample2Controls" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* end client section */}

  {/* contact section */}
  <section className="contact_section  long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}

   </>
}

export default Home;