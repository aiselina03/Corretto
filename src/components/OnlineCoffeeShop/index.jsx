import React, { useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function OnlineCoffeeShop() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="coffeeShop">
        <div
          className="header"
          data-aos="fade-down" data-aos-duration="1500"
        >
          <h2>ONLINE COFFEE SHOP</h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="containerPosts">
          <div className="posts">
            <div
              className="post"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              <div className="img">
                <img
                  src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
                  alt=""
                />
              </div>

              <button>ADD TO CART</button>
              <h5>ETHIOPIA COFFEE</h5>
              <p>$15.00</p>
            </div>
            <div
              className="post"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              <div className="img">
                <img
                  src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png"
                  alt=""
                />
              </div>

              <button>ADD TO CART</button>
              <h5>KENYA COFFEE</h5>
              <p>$18.00</p>
            </div>
            <div
              className="post"
              data-aos="zoom-out-right"
              data-aos-duration="1500"
            >
              <div className="img">
                <img
                  src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
                  alt=""
                />
              </div>

              <button>ADD TO CART</button>
              <h5>COLUMBIA COFFEE</h5>
              <p>$21.00</p>
            </div>
            <div
              className="post"
              data-aos="zoom-out-right"
              data-aos-duration="1500"
            >
              <div className="img">
                <img
                  src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-8.png"
                  alt=""
                />
              </div>

              <button>ADD TO CART</button>
              <h5>GUATEMALA COFFEE</h5>
              <p>$25.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineCoffeeShop;
