import React from "react";
import "./style.scss";


function CoffeeHerald() {
  return (
    <>
      <div className="coffeeHerald">
        <div className="containerCoffeeHerald">
          <div className="header">
            <h2>THE COFFEE HERALD</h2>
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="posts" >
            <div className="post" >
              <img 
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg"
                alt=""
              />
              <h4>PREP TECHNIQUES</h4>
              <p>
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <a href="">- READ MORE</a>
            </div>
            <div className="post">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-2.jpg"
                alt=""
              />
              <h4>FRENCH PRESS</h4>
              <p>
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <a href="">- READ MORE</a>
            </div>
            <div className="post">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-3.jpg"
                alt=""
              />
              <h4>TURKISH IBRIK</h4>
              <p>
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <a href="/">- READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoffeeHerald;
