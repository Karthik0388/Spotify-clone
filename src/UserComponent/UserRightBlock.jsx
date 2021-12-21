import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./ProfileComponent/Profile";
import ProfileUpload from "./ProfileComponent/ProfileUpload";
import CreatePlayList from "./../Components/AudioComponent/CreatePlayList";
import MusicHome from "./../Components/AudioComponent/MusicHome";
import AudioDetails from "./../Components/AudioComponent/AudioDetails";

const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="UserrightBlock">
      {id === "profile" && <Profile />}
      {id === "upload_photo" && <ProfileUpload />}
      {id === "create-play-list" && <CreatePlayList />}
      {id === "music-home" && <MusicHome />}
      <footer>
        <AudioDetails />
      </footer>
    </div>
  );
};

export default UserRightBlock;
