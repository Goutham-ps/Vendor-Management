import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      {/* <header>
        <h1>MELEDOMIA</h1>
        <p>Something hot! Something tasty!</p>
       
      </header> */}

      <main>
        {/* <img src="https://static.vecteezy.com/system/resources/previews/027/865/586/non_2x/set-of-restaurant-doodles-food-and-drinks-on-black-background-vector.jpg" alt="text" className="imae"/> */}
        <div className="mn">
            <h2 className="head">Explore our cloud-native solutions that can help you accelerate growth, automate transactions, and scale your operations.</h2>
            <button className="button"><Link to="/Menu" className="men" >Products</Link></button>
            
        </div>

      </main>

      <footer>
        <div className="footer-links">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
