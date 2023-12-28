import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.scss";

function CounterApp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counterContainer">
          <div className="counts">
            <div className="count">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={250} duration={3} delay={0.2} />
                )}
              </h1>
              <h4>VARIETIES OF COFFEE</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean
              </p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={123} duration={3} delay={0.2} />
                )}
              </h1>
              <h4>HOURS OF TESTING</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean
              </p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={321} duration={3} delay={0.2} />
                )}
              </h1>
              <h4>COFFEE MARKETS</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean
              </p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={220} duration={3} delay={0.2} />
                )}
              </h1>
              <h4>COFFEE BRANDS</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean
              </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default CounterApp;
