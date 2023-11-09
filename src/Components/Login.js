import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section style={{marginTop:"50px"}} className="contact_section  long_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form_container">
              <div className="heading_container">
                <h2>Log in</h2>
              </div>
              <form action="">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="btn_box">
                  <button>LOGIN</button>
                </div>
                <br />
                <br />
                <div>
                  <span>
                    If you have not register ? &nbsp;&nbsp;
                    <Link to="/register">Click Here </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
