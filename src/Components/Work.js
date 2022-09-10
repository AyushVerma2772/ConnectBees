import React from 'react'
import "../Styles/Work.css";
import boyImage from '../Images/boyImage.png'

function Work() {
  return (
    <>
      <div className="headingSection d-flex" id='howWorks'>
        <h2 className='heading' >HOW IT WORKS ?</h2>

        <div className="containers d-flex">

          <div className="inner-container d-flex">
            <img src={boyImage} alt="boy" />

            <div className="container1 allCont" data-aos="zoom-in" >
              <p className="para"></p>
            </div>

            <div className="container2 allCont" data-aos="zoom-in" >
              <p className="para"></p>
            </div>

            <div className="container3 allCont" data-aos="zoom-in" >
              <p className="para"></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work
