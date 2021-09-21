import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="headerlogin">
      <img
        src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=8ISNm1HI0EsAX_cgcEp&_nc_ht=scontent-jnb1-1.xx&oh=6a164096e53d8417e1d8b966d6d71a1e&oe=5F785333"
        alt=""
      />
      <div className="headerlogin__navs">
        <h2>Rooms</h2>
        <h2>Features</h2>
        <h2>Privacy & safety</h2>
        <h2>For developers</h2>
      </div>
    </div>
  );
}

export default Header;
