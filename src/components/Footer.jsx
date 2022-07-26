import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

import pwcpics1 from '../components/images/pwcpics1.jpeg'
import pwcpics2 from '../components/images/pwcpics2.jpeg'
import pwcpics3 from '../components/images/pwcpics3.jpeg'
import pwcpics4 from '../components/images/pwcpics4.jpeg'

function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div>
                        <div class="logo">

                        </div>
                        <h1>PwC Tech Bootcamp</h1>

                        <div className="menu">
                            <ul className="nav-links">
                                <li>
                                    <Link to="./">Home</Link>
                                </li>
                                <li>
                                    <Link to="./about">About</Link>
                                </li>
                                <li>
                                    <Link to="./contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="./gallery">Gallery</Link>
                                </li>

                                <li>
                                    <Link to="./application">Apply</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="gallery">
                        <div class="gallery-item"><img src={pwcpics1} alt="" /></div>
                        <div class="gallery-item"><img src={pwcpics2} alt="" /></div>
                        <div class="gallery-item"><img src={pwcpics3} alt="" /></div>
                        <div class="gallery-item"><img src={pwcpics4} alt="" /></div>
                        <div class="gallery-item"><img src={pwcpics1} alt="" /></div>
                        <div class="gallery-item"><img src={pwcpics2} alt="" /></div>
                    </div>

                    <div class="social">
                        <p>Follow us on</p>
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <hr />
                <p id="copy">Copyright &copy; 2022</p>
            </footer>
        </div>
    )
}

export default Footer