import { Link } from "react-router-dom";

function About(){
    return<>
        <section style={{marginTop:"50px"}} className="about_section layout_padding long_section">
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
            <Link href="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
}

export default About;