import React from "react";
import { useLocation } from "react-router";
import "./Footer.css";
const Footer = () => {
  const location = useLocation();
  const backToTop = () => {
    if (location.pathname === "/") {
      window?.document?.querySelector(".products")?.scrollIntoView();
    } else if (location.pathname === "/basket") {
      window?.document
        ?.querySelector(".basketcontainer__header")
        ?.scrollIntoView();
    } else if (location.pathname === "/notifications") {
      window?.document
        ?.querySelector(".notifications__header")
        ?.scrollIntoView();
    } else {
      window?.document?.querySelector(".profile")?.scrollIntoView();
    }
  };
  return (
    <div className="footer">
      <div className="footer__top">
        <button onClick={backToTop}>Back to top</button>
        <div className="footer__top__container">
          <div className="footer__top__section">
            <h1>Help</h1>
            <p>Uploading Products</p>
            <p>Adding Products To Basket</p>
            <p>Buying Products</p>
            <p>Shipping</p>
            <p>Contact Admin</p>
          </div>
          <div className="footer__top__section">
            <h1>Payment Products </h1>
            <p>Payment Methods</p>
            <p>Payments Problems</p>
            <p>Refunds</p>
          </div>
          <div className="footer__top__section">
            <h1>Make Money with Us</h1>
            <p>Join Us</p>
            <p>Advertise your products</p>
            <p>Ads</p>
          </div>
          <div className="footer__top__section">
            <h1>Get to Know Us</h1>
            <p>Website</p>
            <p>Admin</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__section">
          <h1>Products</h1>
          <p>About products</p>
          <p>Top rated</p>
          <p>Specials</p>
          <p>Sales</p>
        </div>
        <div className="footer__bottom__section">
          <h1>Advertising</h1>
          <p>Advertise Products</p>
          <p>Adds</p>
        </div>
        <div className="footer__bottom__section">
          <h1>Free Services</h1>
          <p>Find Free Services</p>
          <p>Share A Service</p>
        </div>
        <div className="footer__bottom__section">
          <h1>Developer</h1>
          <p>Developer API's</p>
          <p>Join Team</p>
        </div>
        <div className="footer__bottom__section">
          <h1>More</h1>
          <p>What's new?</p>
          <p>What's Trending?</p>
          <p>What is Liked</p>
        </div>
        <div className="footer__bottom__section">
          <h1>Developer Information</h1>
          <p>Crispen Gari</p>
          <p>Crispengari@gmail.com</p>
          <p>+27 652 305 879</p>
          <p>ZA</p>
        </div>
        {/* <div className="footer__bottom__section"></div>
        <div className="footer__bottom__section"></div>
        <div className="footer__bottom__section"></div>
        <div className="footer__bottom__section"></div> */}
      </div>

      <p>
        This site is owned by <strong>Crispen Gari</strong> and maintained by{" "}
        <strong>Crispen Gari</strong>.
      </p>
    </div>
  );
};

export default Footer;
