import React from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, handleShow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(!true);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"} `}>
      <div className="nav_logo">
        <h2>MovieCrop</h2>
      </div>
      <div className="nav_avatar">
        <small>
          <h2>Admin</h2> Crispen
        </small>
      </div>
      {/* <img className="nav_logo" src="avatar.jpg" alt="NetFlix Logo" />
      <img className="nav_avatar" src="avatar.jpg" alt="User Profile" /> */}
    </div>
  );
};
export default Navbar;
