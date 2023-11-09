import React from 'react'

export default function Register() {
  return (
    <section style={{marginTop:"50px"}} className="contact_section  long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Register Here
              </h2>
            </div>
            <form action="">

            <div className='form-group'>
                <input className='form-control' type="text" placeholder="Enter Name" />
              </div>

              <div className='form-group'>
                <input className='form-control' type="email" placeholder="Enter Email" />
              </div>
              <div className='form-group'>
                <input className='form-control' type="text" placeholder="Enter Password" />
              </div>


              <div className="form-group">
                  <select className='form-control'>
                    <option  value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
              </div>

             
              <div className="btn_box">
                <button type='submit'>
                    REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  </section>  
  )
}
