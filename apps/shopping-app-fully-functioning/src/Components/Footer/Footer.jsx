import React from "react";
import {
  Apple,
  CreditCard,
  Email,
  Facebook,
  Instagram,
  Shop,
  Twitter,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import "./Footer.css";
import { Button, Input, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <h1>ShopName</h1>
        <div className="footer__top--center">
          <h2>New to ShopName?</h2>
          <h2>Sign Up and Get up to R200 Off</h2>
          <div className="footer__top--centerInput">
            <Input
              className="footer__top--centerInputText"
              startAdornment={
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              }
              disableUnderline
              type="email"
            />
            <Button className="footer__top--centerInputButton">Submit</Button>
          </div>
        </div>
        <div className="footer__top--right">
          <div className="footer__top--rightTop">
            <h1>Download The Shop Free App</h1>
            <p>Get access to exclusive offers!</p>
          </div>
          <div className="footer__top--Button">
            <Apple />
            <div className="footer__top--ButtonLabels">
              <small>Download on the</small>
              <h5>App Store</h5>
            </div>
          </div>
          <div className="footer__top--Button">
            <Shop />
            <div className="footer__top--ButtonLabels">
              <small>Get it On</small>
              <h5>Google Play</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--top">
          <div className="footer__bottom--topSection">
            <h1>About</h1>
            <Link className="footer__bottom--topSectionLink">Who are we?</Link>
            <Link className="footer__bottom--topSectionLink">
              Working with us
            </Link>
            <Link className="footer__bottom--topSectionLink">
              Sell on Shopname
            </Link>
          </div>
          <div className="footer__bottom--topSection">
            <h1>About</h1>
            <Link className="footer__bottom--topSectionLink">Contact us</Link>
            <Link className="footer__bottom--topSectionLink">Help Center</Link>
            <Link className="footer__bottom--topSectionLink">
              Terms and Conditions
            </Link>
            <Link className="footer__bottom--topSectionLink">Size Guides</Link>
            <Link className="footer__bottom--topSectionLink">Returns</Link>
            <Link className="footer__bottom--topSectionLink">
              Markertplace Terms and Conditions
            </Link>
          </div>
          <div className="footer__bottom--topSection">
            <h1>Developer</h1>
            <Link className="footer__bottom--topSectionLink">
              Developer Info
            </Link>
            <Link className="footer__bottom--topSectionLink">
              Developer Contacts
            </Link>
            <Link className="footer__bottom--topSectionLink">Explore</Link>
          </div>
          <div className="footer__bottom--topSection">
            <h1>Discover</h1>
            <Link className="footer__bottom--topSectionLink">New Products</Link>
            <Link className="footer__bottom--topSectionLink">Speacials</Link>
            <Link className="footer__bottom--topSectionLink">Ideas</Link>
          </div>
          <div className="footer__bottom--topSection">
            <h1>My Profile</h1>
            <div>
              <div className="footer__bottom--topSection1">
                <Link className="footer__bottom--topSectionLink">
                  My Account
                </Link>
                <Link className="footer__bottom--topSectionLink">
                  Order History
                </Link>
              </div>
              <div className="footer__bottom--topSection1">
                <Link className="footer__bottom--topSectionLink">My Cart</Link>
                <Link className="footer__bottom--topSectionLink">Credits</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom--bottom">
          <div className="footer__bottom--bottomContainer">
            <h1>Connect with us</h1>
            <Facebook />
            <Twitter />
            <WhatsApp />
            <Instagram />
            <Email />
            <YouTube />
          </div>
          <div className="footer__bottom--bottomContainer">
            <h1>Payment Method</h1>

            <div className="footer__bottom--bottomContainerPayments">
              <CreditCard /> <h3>Visa</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
