import React from 'react'
import './Contactus.css'
import MapImage from "../components/images/map.png";


function Contactus() {
  return (
    <main>
      <section className="section">
        <div className="form-wrapper">
          <form id="my-form">
            <h1>Kindly fill in accordingly</h1>
            <div className="msg"></div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input className="form-control" type="text" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="textbox">What services do you need?</label>
              <textarea name="textbox" id="textbox" cols={30} rows={10} required></textarea>
            </div>
            <input className="btn" type="submit" value="Submit" id="button" />
          </form>
        </div>
      </section>
      <section className="location container">
        <div className="phone">
          <span>
            <i className="fas fa-phone"></i>
          </span>
          <p>Phone number:+2342914558</p>
        </div>
        <div className="email">
          <span>
            <i className="fas fa-envelope"></i>
          </span>
          <p>Email:info@xerde.ng</p>
        </div>
        <div className="address">
          <span>
            <i className="fas fa-globe"></i>
          </span>
          <p>1400 Tiamiyu Savage St, Victoria Island 106104, Lagos</p>
        </div>
      </section>

      <label htmlFor="map"> Where to locate us:</label>
      <div className="map">
        <img src={MapImage} width={1350} height={400} />
      </div>
    </main>
  );
}

export default Contactus