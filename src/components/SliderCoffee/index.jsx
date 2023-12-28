import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function SliderCoffee() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="photo">
          <div
            className="bckImage1"
          ></div>
          <div className="text">
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-slider-img-1.png"
              alt=""
              className="logo"
            />
            <h1
            >
              COFFEE FACTORY
            </h1>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png"
              alt=""
              className="seperator"
            />
            <p
            // data-aos="fade-up" data-aos-duration="1000"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quod iusto tempore culpa beatae ad cum quaerat, nesciunt nostrum
              molestiae.
            </p>
            <button
            // data-aos="fade-up" data-aos-duration="1000"
            >
              SHOP HERE
            </button>
          </div>
        </div>
        <div className="photo">
          <div className="bckImage2"></div>
          <div className="text">
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-slider-img-1.png"
              alt=""
              className="logo"
            />
            <h1
            //  data-aos="fade-up" data-aos-duration="1000"
            >
              COFFEE HEAVEN
            </h1>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png"
              alt=""
              className="seperator"
            />
            <p
            // data-aos="fade-up" data-aos-duration="1000"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quod iusto tempore culpa beatae ad cum quaerat, nesciunt nostrum
              molestiae.
            </p>
            <button
            //  data-aos="fade-up" data-aos-duration="1000"
            >
              SHOP HERE
            </button>
          </div>
        </div>
        <div className="photo">
          <div className="bckImage3"></div>
          <div className="text">
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-slider-img-1.png"
              alt=""
              className="logo"
            />
            <h1
            // data-aos="fade-up" data-aos-duration="1000"
            >
              COFFEE MASTERS
            </h1>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png"
              alt=""
              className="seperator"
            />
            <p
            // data-aos="fade-up" data-aos-duration="1000"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quod iusto tempore culpa beatae ad cum quaerat, nesciunt nostrum
              molestiae.
            </p>
            <button
            // data-aos="fade-up" data-aos-duration="1000"
            >
              SHOP HERE
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderCoffee;
