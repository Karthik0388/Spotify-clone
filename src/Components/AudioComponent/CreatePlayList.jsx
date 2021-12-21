import React, { Fragment, useState } from "react";
import "./CreatePlayList.css";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom"
import firebase from "./../../FireBase";

let genre = [
  "Blues",
  "Classical",
  "Disco",
  "Hiphop",
  "Jazz",
  "Oldies",
  "county",
  "Rock",
  "Electronic",
  "Folk",
  "Indie Rock",
];

const CreatePlayList = () => {
  let history = useHistory();
  let [state, setState] = useState({
    audio_title: "",
    audio_artist: "",
    audio_language: "",
    audio_category: "",
    audio_details: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let {
    audio_title,
    audio_artist,
    audio_language,
    audio_category,
    audio_details,
    loading,
    barStatus,
    progress,
  } = state;

  let [Poster, setPoster] = useState("");
  let [AudioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleAudio = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let AUDIO_POSTER = Poster.audio_poster.name;
      let AUDIO_FILE = AudioFile.audio_file.name;
      let audio_storage = firebase
        .storage()
        .ref(`/music-poster/${AUDIO_POSTER}`)
        .put(Poster.audio_poster);
      let Mp3_storage = firebase
        .storage()
        .ref(`/music-file/${AUDIO_FILE}`)
        .put(AudioFile.audio_file);
      Mp3_storage.on(
        "state_changed",
        snapShot => {
          //!ProgressBar
          let ProgressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: ProgressBar });
        },
        error => {
          //!error handling
          throw error;
        },
        async () => {
          //!Completetion of task
          let DownloadPoster = await firebase
            .storage()
            .ref("music-poster")
            .child(AUDIO_POSTER)
            .getDownloadURL();
          setPoster(DownloadPoster);
          let DownloadMp3 = await firebase
            .storage()
            .ref("music-file")
            .child(AUDIO_FILE)
            .getDownloadURL();
          setPoster(DownloadMp3);
          firebase
            .database()
            .ref("audio-library")
            .push({ ...state, DownloadPoster, DownloadMp3 });
            history.push("/userhome/profile")
            toast.success("Successfully Uploaded")
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="AudioSection">
      <article>
        <section>
          <article>
            {barStatus === true ? (
              <>
                <span>
                  <ProgressTemplate />
                </span>
                <span>{Math.round(progress) + "%"}</span>
              </>
            ) : (
              ""
            )}
          </article>
        </section>
        <h2>CREATE PLAY LIST</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="audio_title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Audio Title"
              name="audio_title"
              value={audio_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              className="form-control"
              name="audio_artist"
              value={audio_artist}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">language</label>
            <input
              type="text"
              className="form-control"
              name="audio_language"
              value={audio_language}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Audio category</label>
            <select
              name="audio_category"
              value={audio_category}
              onChange={handleChange}
            >
              {genre.map((value, index) => (
                <Fragment key={index}>
                  <option value={value}>{value}</option>
                </Fragment>
              ))}
            </select>
          </div>
          <div className="form-group audio_details">
            <label htmlFor="audio_details"></label>
            <textarea
              name="audio_details"
              value={audio_details}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="audio_poster">Poster</label>
            <input
              type="file"
              className="form-control"
              name="audio_poster"
              onChange={handlePoster}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="audio_file">Upload Audio file</label>
            <input
              type="file"
              className="form-control"
              name="audio_file"
              onChange={handleAudio}
            />
          </div>
          <div>
            <button className="btn-block">
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePlayList;
