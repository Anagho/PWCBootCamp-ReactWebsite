import React from 'react';
// import gallery css
import './Gallery.css'

import pwcpics1 from '../components/images/pwcpics1.jpeg'
import pwcpics2 from '../components/images/pwcpics2.jpeg'
import pwcpics3 from '../components/images/pwcpics3.jpeg'
import pwcpics4 from '../components/images/pwcpics4.jpeg'

function Gallery() {
  return (
    <main>
        <h2>Our People, Our Culture!</h2>

        <section class="content">
            <div class="content-gallery">
                <div className="content-item"><img src={pwcpics1} alt="" /></div>
                <div className="content-item"><img src={pwcpics2} alt="" /></div>
                <div className="content-item"><img src={pwcpics3} alt="" /></div>
                <div className="content-item"><img src={pwcpics4} alt="" /></div>
                <div className="content-item"><img src={pwcpics2} alt="" /></div>
                <div className="content-item"><img src={pwcpics1} alt="" /></div>
                <div className="content-item"><img src={pwcpics1} alt="" /></div>
                <div className="content-item"><img src={pwcpics2} alt="" /></div>
                <div className="content-item"><img src={pwcpics3} alt="" /></div>
                <div className="content-item"><img src={pwcpics4} alt="" /></div>
                <div className="content-item"><img src={pwcpics2} alt="" /></div>
                <div className="content-item"><img src={pwcpics1} alt="" /></div>
            </div>
        </section>

    </main>
  )
}

export default Gallery