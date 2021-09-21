import React, { useEffect, useState } from "react";
import "./Home.css";
import { IconButton } from "@material-ui/core";
import { BsChatDots } from "react-icons/bs";
import { Header, Banner, Products, Footer } from "../../components";
const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBot, setShowBot] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  // useEffect(() => {
  //   window?.document?.querySelector(".home")?.scrollIntoView();
  // }, []);
  return (
    <div className="home">
      <Header />
      <Banner />
      <Products />

      <div className="home__help">
        {showWelcome && !showBot && (
          <div className="home__help__message">Hi, how can i help you?</div>
        )}
        {!showBot && (
          <IconButton
            onClick={() => setShowBot(true)}
            className="home__help__icon__button"
          >
            <BsChatDots className="home__help__icon" />
          </IconButton>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
