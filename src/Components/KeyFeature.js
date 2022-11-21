import React from "react";
import "../Styles/KeyFeature.css";
import phone1 from '../Images/phone1.png'
import phone2 from '../Images/phone2.png'
import phone3 from '../Images/phone3.png'

function KeyFeature() {
  return (
    <div className="KeyFeature d-flex" id="keyfeature">
      <h2 className="heading">KEY FEATURES</h2>

      {/* <div className="heading">
        <div className="track d-flex">
          <div className="content">
            KEY FEATURES KEY FEATURES KEY FEATURES KEY FEATURES KEY FEATURES{" "}
          </div>
        </div>
      </div> */}

      <div className="ourKeyFeatures">
        <div className="phone1 phone" >
          <div className="phoneHeading">
            <div className="roundnumber d-flex">1</div>
            <h4>GAURAV MAURYA</h4>
          </div>
          <img src={phone1} alt="phone1" />
        </div>
        <div className="phone2 phone"  >
          <div className="phoneHeading"
          >
            <div className="roundnumber d-flex">2</div>
            <h4>Aman</h4>
          </div>
          <img src={phone2} alt="/" />
        </div>
        <div className="phone3 phone" >
          <div className="phoneHeading">
            <div className="roundnumber d-flex">3</div>
            <h4>AYUSH VERMA</h4>
          </div>
          <img src={phone3} alt="/" />
        </div>
      </div>
    </div>
  );
}
export default KeyFeature;
