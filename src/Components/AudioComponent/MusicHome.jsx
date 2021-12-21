import React, { useContext, useState, useRef, Fragment } from "react";
import { AudioContextApi } from "./../../Apis/AudioContext";
import "./CreatePlayList.css";
import AudioList from "./AudioList"

const MusicHome = () => {
  let AUDIO = useContext(AudioContextApi);
  console.log(AUDIO);
  return (
    <Fragment>
      {AUDIO.state.length >= 0 && (<AudioList audio={AUDIO.state} HandleSelect={AUDIO.HandleSelect}/>)}
    </Fragment>
  );
};

export default MusicHome;
