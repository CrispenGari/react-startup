import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  PauseCircleOutline,
} from "@material-ui/icons";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useStateValue();

  React.useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((playback) => {
      console.log(playback);

      dispatch({
        name: "SET_PLAYING",
        playing: playback.is_playing,
      });

      dispatch({
        name: "SET_ITEM",
        item: playback.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        name: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        name: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        name: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        name: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((playing) => {
      dispatch({
        name: "SET_ITEM",
        item: playing.item,
      });
      dispatch({
        name: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNext onClick={skipPrevious} className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
