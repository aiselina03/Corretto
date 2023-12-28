import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider from "react-slick";

function SliderLogo() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <>
    <div className="sliderLogo">
        <Slider {...settings}>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1-1.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-5.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-5-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-6.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-6-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1-1.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-5.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-5-hover.png" alt="" className="imgHover"/>
        </div>
        <div className="photo">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-6.png" alt="" className="img"/>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-6-hover.png" alt="" className="imgHover"/>
        </div>
      </Slider>
    </div>
      
    </>
  );
}

export default SliderLogo;
