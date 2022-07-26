import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

import pwcpics1 from '../components/images/pwcpics1.jpeg'
import pwcpics2 from '../components/images/pwcpics2.jpeg'
import pwcpics3 from '../components/images/pwcpics3.jpeg'
import pwcpics4 from '../components/images/pwcpics4.jpeg'

function About() {
  return (
    <main>
        <div className="about-section">
        <h2><u>W</u>hat we do</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sapiente quidem at exercitationem numquam placeat necessitatibus, nulla, itaque saepe mollitia repellendus nisi voluptatibus. Molestias at veritatis dolorum dignissimos vitae doloribus neque dolore corporis illum. Animi tempora, veniam quasi asperiores quia reprehenderit aliquid ullam modi culpa facilis, soluta cum quaerat cumque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni rem dolore nulla maxime assumenda modi consequatur accusantium possimus molestiae dolorem!</p>
      </div>
      <section className="content-container">
      <h1><u>Our Team</u></h1>
        <div className="column">
            <div className="card">
                <p><img src={pwcpics1} alt="John" /></p>
                <div className="info">
                    <h2>Jackie Chan</h2>
                    <p className="title"><strong>Web Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <Link to='/contactus' className='btn'>Contact us</Link>
                </div>
            </div>
            <div className="card">
                <p><img src={pwcpics2} alt="John" /></p>
                <div className="info">
                    <h2>Princess Chan</h2>
                    <p className="title"><strong>Software Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <Link to='/contactus' className='btn'>Contact us</Link>
                </div>
            </div>
            <div className="card">
                <p><img src={pwcpics3} alt="John" /></p>
                <div className="info">
                    <h2>Oluwakemi Adeola</h2>
                    <p className="title"><strong>Backend Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <Link to='/contactus' className='btn'>Contact us</Link>
                </div>
            </div>
            <div className="card">
                <p><img src={pwcpics4} alt="rachel" style={{height: "11.2rem"}} /></p>
                <div className="info">
                    <h2>Rachel Myers</h2>
                    <p className="title"><strong>Fullstack Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <Link to='/contactus' className='btn'>Contact us</Link>
                </div>
            </div>
        </div> 
        </section>  
      
    </main>
  )
}

export default About