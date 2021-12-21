import React from "react";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <div className="UserLeftBlock">
      {/* <Logo /> */}
      <ul>
        <li>
          <a href="">
            <i class="fal fa-home-alt"></i>
            <span>
              <Link to="music-home">Home</Link>
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fas fa-search"></i> <span>Search</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fal fa-books"></i> <span> Your Library</span>
          </a>
        </li>
      </ul>
      <ul className="playList">
        <li>
          <i class="fas fa-plus-square"></i>{" "}
          <span>
            <Link to="/userhome/create-play-list">Create Playlist</Link>
          </span>
        </li>
        <li>
          <i class="fas fa-heart-square"></i> <span> Liked Songs </span>
        </li>
      </ul>
      <div className="underLine"></div>

      <footer>
        <i class="fal fa-arrow-circle-down"></i> Install App
      </footer>
    </div>
  );
};

export default UserLeftBlock;
