import React from "react";
import "./style..scss";
import { Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png"
            alt=""
          />
          <div className="text">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <p>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam,
              </p>
              <p>nostrud exercitation ullamco laboris.”</p>
            </p>
          </div>
          <div className="store">
            <h2>STORES</h2>
            <p>Dunsmuir Ave, Los Angeles, CA 90036, USA</p>
            <p>Atkins Ave, Brooklyn, NY 11208, USA</p>
          </div>
          <div className="mail">
            <h2>NEWS AS FRESH AS OUR COFFEE</h2>
            <div className="inputBorder">
              <input type="text" placeholder="Your E-mail Adress..." />
              <i class="fa-light fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className="foot2">
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <ul>
            <li><Link>HOME</Link></li>
            <li><Link>ABOUT</Link></li>
            <li><Link>SHOP</Link></li>
            <li><Link>CONTACT</Link></li>
          </ul>
          <div className="icons">
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.tumblr.com/"><i class="fa-brands fa-tumblr"></i></a>
            <a href="https://vimeo.com/"><i class="fa-brands fa-vimeo-v"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
