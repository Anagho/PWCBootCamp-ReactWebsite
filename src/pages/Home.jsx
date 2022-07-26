import React from "react";
import './Home.css';
import Node from '../components/images/logos/node.png';
import Python from '../components/images/logos/python.png';
import Csharp from '../components/images/logos/csharp.png';
import Php from '../components/images/logos/php.png';
import Scala from '../components/images/logos/scala.png';
import Clojure from '../components/images/logos/clojure.png';
import Ruby from '../components/images/logos/ruby.png';


function Home() {
  return (
      <main>
        <section class="hero">
          <div className="hero-content">
          <h1>Welcome to PwC Tech Talent Bootcamp</h1>
            <p>Get the latest skill you need</p>
          </div>  
        </section>

        <section className="content">
        <h2 className="container" id="learn">
            What You'll Learn
        </h2>

        <div className="container flex">
            <div className="card">
                <h4>Node.js</h4>
                <img src={Node} alt="" />
            </div>
            <div className="card">
                <h4>Python</h4>
                <img src={Python} alt="" />
            </div>
            <div className="card">
                <h4>CSharp</h4>
                <img src={Csharp} alt="" />
            </div>
            <div className="card">
                <h4>PHP</h4>
                <img src={Php} alt="" />
            </div>
            <div className="card">
                <h4>Clojure</h4>
                <img src={Clojure} alt="" />
            </div>
            <div className="card">
                <h4>Ruby</h4>
                <img src={Ruby} alt="" />
            </div>
            <div className="card">
                <h4>Scala</h4>
                <img src={Scala} alt="" />
            </div>
        </div>
    </section>

    </main>
  );
}

export default Home;
