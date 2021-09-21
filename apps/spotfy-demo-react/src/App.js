import React from "react";

import "./App.css";
import { Login, Main } from "./Components";
import { useStateValue } from "./StateProvider";
import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromURL, client_id } from "./spotify";
const spotify = new SpotifyWebApi();
function App() {
  const [{ token, user }, dispatch] = useStateValue();

  React.useEffect(() => {
    const hash = getTokenFromURL();

    window.location.hash = "";
    let temp_token = hash.access_token;
    if (temp_token) {
      spotify.setAccessToken(temp_token);
      dispatch({
        name: "SET_TOKEN",
        token: temp_token,
      });
      spotify.getPlaylist(client_id).then((playlist) =>
        dispatch({
          name: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        })
      );
      dispatch({
        name: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getMyTopArtists().then((artist) => {
        dispatch({
          name: "SET_TOP_ARTISTS",
          top_artists: artist,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          name: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getMe().then((user) => {
        dispatch({
          name: "SET_USER",
          user: user,
        });
      });
    }
  }, [token, dispatch]);
  console.log(user);
  return (
    <div className="app">{token ? <Main spotify={spotify} /> : <Login />}</div>
  );
}

export default App;
