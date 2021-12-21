import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {AuthContextApi} from '../../Apis/AuthContext'
import "./Profile.css"
const Profile = () => {
    let {displayName, photoURL} = useContext(AuthContextApi);
    return (
      <section id="profileBlock">
        <article>
          <header>
            <figure>
              <Link to="/userhome/upload_photo">
                <span className="_editIcon">
                  <i class="far fa-edit" aria-hidden="true"></i>
                  choose Photo
                </span>
                <img src={photoURL} alt={displayName} />
              </Link>
            </figure>

            <aside>
              <h5>Profile</h5>
              <h1>{displayName}</h1>
            </aside>
          </header>
          <main></main>
          <footer></footer>
        </article>
      </section>
    );
}

export default Profile
