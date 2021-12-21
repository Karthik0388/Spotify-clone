import React from "react";
import Logo from "./../HeaderComponent/Logo";
import './Footer.css'

const Footer = () => {
  return (
    <section id="Footer-block">
      <article>
        <div className="sliderLeft">
          <Logo />
        </div>
        <div className="List1">
          <h1>COMPANY</h1>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div className="List2">
          <h1>COMMUNITIES</h1>
          <ul>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className="List3">
          <h1>USEFUL LINKS</h1>
          <ul>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="List4">
          <span>
            <i class="fab fa-instagram-square"></i>
          </span>
          <span>
            <i class="fab fa-twitter"></i>
          </span>
          <span>
            <i class="fab fa-facebook"></i>
          </span>
        </div>
        {/* <span>
          <i class="far fa-globe-americas"></i>USA
        </span> */}
        {/* <div className="footerLast">
          <ul>
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Additional CA Privacy Disclosures</li>
            <li>© 2021 Spotify AB</li>
          </ul>
        </div> */}
      </article>
    </section>
  );
};

export default Footer;
