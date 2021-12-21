import React, { useRef, useState } from "react";

const MusicComp = ({
  id,
  title,
  artist,
  language,
  details,
  category,
  Poster,
  src,
}) => {
  let [play, setPlay] = useState(false);
  let audioRef = useRef(false);

  let PlayOrPause = () => {
    setPlay(!play);
    play === true ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <div className="col-3" key={id}>
      <figure>
        <img src={Poster} alt={title} onClick={PlayOrPause} />
      </figure>
      <h2>{title}</h2>
      <audio src={src} ref={audioRef} controls></audio>
    </div>
  );
};

export default MusicComp;
