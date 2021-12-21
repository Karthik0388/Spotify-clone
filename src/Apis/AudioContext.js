import React, {useState,useEffect, createContext } from "react";
import firebase from './../FireBase';

export let AudioContextApi = createContext();

let AudioContextProvider = ({ children }) => {
    let [state, setState] = useState([]);
  let [selectSong, setSelectSong] = useState("");

  let HandleSelect = audio => {
    setSelectSong(audio);
    console.log(selectSong);
  }
    useEffect(()=>{
        let fetchAudios = async () =>{
            //!fetch data from database
            let audioList = firebase.database().ref("audio-library");
            //! firebase event to fetch
            audioList.on("value", Callback => {
              let SpotifyMusics = [];
              Callback.forEach(audio =>{
                let { DownloadMp3, DownloadPoster, audio_artist, audio_category, audio_details, audio_language, audio_title } = audio.val();
                SpotifyMusics.push({
                  id: audio.key,
                  title: audio_title,
                  arist: audio_artist,
                  language: audio_language,
                  category: audio_category,
                  details: audio_details,
                  Poster: DownloadPoster,
                  src: DownloadMp3,
                });
              });
              setState(SpotifyMusics);
            })
      }
      fetchAudios();
    },[state.AUDIOS])
  return (
    <AudioContextApi.Provider value={{ state, HandleSelect, selectSong }}>
      {children}
    </AudioContextApi.Provider>
  );
};

export default AudioContextProvider;