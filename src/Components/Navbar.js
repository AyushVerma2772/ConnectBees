import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import bee from '../Images/bee.png'
import beehive from '../Images/beehive.png'


export default function Navbar() {
    // visibility of menu
    const [menu, setMenu] = useState(false);

    // Window size
    const [size, setSize] = useState(window.innerWidth)

    const showMenu = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
    }, [])

    return (
        <>
            <nav className="navbar d-flex">

                <img src={bee} alt="bee" className={`nav-image ${menu ? 'show-logo' : ''} `} id='bee-img' style={{ width: "11rem", left: "0", margin: "5px" }} />

                <ul className={`mid-nav d-flex ${(!menu && size <= 620) ? 'hide-nav' : ''}`} onClick={showMenu} >

                    <li><a href="#howWorks" onClick={showMenu}>HOW IT WORKS</a></li>
                    <li><a href="#keyfeature" onClick={showMenu}>KEY FEATURES</a></li>
                    <li><a href="#vision" onClick={showMenu}>OUR VISION</a></li>
                    <li><a href="#whyus" onClick={showMenu}>WHY US</a></li>
                    <li><a href="#footer" onClick={showMenu}>Contact US</a></li>
                </ul>

                <img src={beehive} alt="beehive" className='nav-image' id='beehive-img' style={{ width: "19rem", right: '0' }} />

                {!menu ? <i className={`fa-solid fa-bars-staggered menu-icon ${menu ? 'show-logo' : ''} `} onClick={showMenu} ></i> : <i className={`fa-solid fa-xmark menu-icon ${menu ? 'show-logo' : ''} `} onClick={showMenu}></i>}

            </nav>
        </>
    )
}
