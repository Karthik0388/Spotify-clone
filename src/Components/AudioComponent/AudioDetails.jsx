import React, { useContext } from "react";
import { AudioContextApi } from "./../../Apis/AudioContext";

const AudioDetails = () => {
  let currentSong = useContext(AudioContextApi);
  let playSong = currentSong.selectSong;
  console.log(playSong);
  return (
    <section className="audioPlayer">
      <article>
        {currentSong == null ? (
          "loading..."
        ) : (
          <div className="_contentBlock">
            <header>
              <h2>{playSong.title}</h2>
              <p>
                <img src={playSong.Poster} alt={playSong.title} />
              </p>
            </header>
            <main>
              <audio
                src={playSong.src}
                autoPlay="true"
                alt={playSong.title}
                controls
              ></audio>
            </main>
          </div>
        )}
      </article>
    </section>
  );
};

export default AudioDetails;
