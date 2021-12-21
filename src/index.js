import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./SpotifyGlobal.css";
import AuthProvider from '../src/Apis/AuthContext'
import AudioContextProvider from "./Apis/AudioContext"


render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.getElementById("root")
);
