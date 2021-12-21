import React from "react";
import "./SliderComponent2.css";

const Slider2 = () => {
  return (
    <div>
      <section id="slider-block2">
        <article>
          <div className="sliderLeft2">
            <h4>#SPOTIFYWRAPPED</h4>
            <h1>2021 Wrapped is ready.</h1>
            <p className="enjoy2">
              But it’s only available in the Spotify app. Download it now to
              discover more.
            </p>
            <div className="appStoreBlock">
              <img src="AppleStore.svg" alt="" />
              <img src="PlayStore.svg" alt="" />
            </div>
            <p className="copyWrite2"><a href="">Listen to 2021 highlights here.</a></p>
          </div>
          <div className="sliderRight2">
            <figure></figure>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Slider2;
