import React, { useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css"; 

function OurDelicious() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="containerDelicious">
        <div className="ourDelicious">
          <div className="header"
           data-aos="fade-down"  data-aos-duration="1500"
           >
            <h2 >OUR DELICIOUS OFFER</h2>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="posts">
            <div className="post"
             data-aos="fade-right" data-aos-duration="1500"
             >
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"
                alt=""
              />
              <h4>TYPES OF COFFEE</h4>
              <p>
                Lorem ipsum dolor sit ametal, <br />
                consectetuer adipiscing elitus. <br /> Aeneantos commodo
              </p>
            </div>
            <div className="post" 
             data-aos="fade-down" data-aos-duration="1500"
             >
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-6.png"
                alt=""
              />
              <h4>BEAN VARIETIES</h4>
              <p>
                Lorem ipsum dolor sit ametal, <br />
                consectetuer adipiscing elitus. <br /> Aeneantos commodo
              </p>
            </div>
            <div className="post"  
            data-aos="fade-down" data-aos-duration="1500" 
            > 
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-7.png"
                alt=""
              />
              <h4>COFFEE & PASTRY</h4>
              <p>
                Lorem ipsum dolor sit ametal, <br />
                consectetuer adipiscing elitus. <br /> Aeneantos commodo
              </p>
            </div>
            <div className="post "
             data-aos="fade-left" data-aos-duration="1500"
             >
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-8.png"
                alt=""
              />
              <h4>COFFEE TO GO</h4>
              <p>
                Lorem ipsum dolor sit ametal, <br />
                consectetuer adipiscing elitus. <br /> Aeneantos commodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurDelicious;
