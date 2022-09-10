import React from 'react'
import '../Styles/ExploreUs.css'
import floor from '../Images/floor.png'
import vdoBg from '../Images/vdoBg.png'
import circle from '../Images/circle.png'
import triangle from '../Images/triangle.png'
import quater from '../Images/quater circle.png'
import square from '../Images/square.png'

export default function ExploreUs() {
    return (
        <>
            <div id="explore-us" className='d-flex' style={{ backgroundImage: `url(${floor})`}}>

                <div className="vdo-container" style={{ backgroundImage: `url(${vdoBg})` }}>

                    {/* Video tag for future */}
                    <video src="..." style={{ width: 'inherit', height: "inherit" }}></video>

                    <img src={circle} alt="circle" className='shapes' style={{ right: '85%', bottom: '75%' }} />
                    <img src={square} alt="square" className='shapes' style={{ left: '85%', top: '-15%' }} />
                    <img src={quater} alt="quater circl" className='shapes' style={{ right: '85%', bottom: '-10%' }} />
                    <img src={triangle} alt="triangle" className='shapes' style={{ left: '90%', bottom: '-10%' }} />
                </div>

                <div className="right-container d-flex">
                    <h3 className='heading3'>BE THE <span style={{ color: "#FFAD00" }} >BEE</span></h3>
                    <h3 className='heading3'>IN OUR COMMUNITY</h3>

                    <button className='explore-btn'><i className="fa-solid fa-arrow-left arrow"></i> EXPLORE US</button>
                </div>

            </div>
        </>
    )
}
