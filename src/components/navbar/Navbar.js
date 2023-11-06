import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectImgUrl } from "../../features/userSlice";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const selectedImg = useSelector(selectImgUrl);
  console.log(selectedImg)

  const history = () => {
    navigate("/profile");
  };

  const previous = () => {
    navigate("/");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => previous()}
          className="nav_logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        />

        <img
          onClick={() => history()}
          className="nav_avatar"
          src={selectedImg?.img || "assets/avatar2.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
