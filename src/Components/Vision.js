import React from 'react'
import '../Styles/Vision.css'
import stairs from '../Images/stairs.png'
import questionMarks from '../Images/question marks.png'
import hand from '../Images/hand.png'


export default function Vision() {
    return (
        <>
            <div id="vision">

                {/* Stairs and question mark image */}
                <img src={stairs} alt="stairs" className='vision-img stairs'/>

                <img src={questionMarks} alt="que-marks" className='vision-img que-marks'/>

                <h2 className='heading'>OUR VISION</h2>

                {/* Container of 4 boxes */}
                <div className="vision-containers">

                    {/* child container of 2 boxes */}
                    <div className="vision-container d-flex">

                        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" className="vision-box d-flex box1">

                            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident natus iste aperiam ab, architecto amet laboriosam sapiente praesentium suscipit dolorum corporis! Temporibus dicta quidem molestiae laboriosam iste consectetur alias. Veritatis.</p>

                        </div>

                        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" className="vision-box d-flex box2">

                            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident natus iste aperiam ab, architecto amet laboriosam sapiente praesentium suscipit dolorum corporis! Temporibus dicta quidem molestiae laboriosam iste consectetur alias. Veritatis.</p>

                        </div>

                    </div>
                    
                    {/* Hand Image */}
                    <img src={hand} alt="" className='vision-img hand-img' data-aos="zoom-out" data-aos-offset="-380" />

                    {/* child container of 2 boxes */}
                    <div className="vision-container d-flex" >
                        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" className="vision-box d-flex box3">

                            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident natus iste aperiam ab, architecto amet laboriosam sapiente praesentium suscipit dolorum corporis! Temporibus dicta quidem molestiae laboriosam iste consectetur alias. Veritatis.</p>

                        </div>

                        <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" className="vision-box d-flex box4">

                            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident natus iste aperiam ab, architecto amet laboriosam sapiente praesentium suscipit dolorum corporis! Temporibus dicta quidem molestiae laboriosam iste consectetur alias. Veritatis.</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
