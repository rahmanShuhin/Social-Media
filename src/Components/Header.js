import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
const Header = () => {
  const handleActive = () => {
    const nav = document.getElementsByClassName("nav_item");
    nav[0].classList.toggle("active");
    nav[1].classList.toggle("active");
  };
  return (
    <div className="header">
      <div className="header__search">
        <div>
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Search ULI" />
        </div>
      </div>
      <div className="header__links">
        <NavLink
          to="/homepage"
          className="nav_item  active_btn"
          onClick={handleActive}
        >
          <HomeIcon></HomeIcon>
          {/* <span className="tooltip">Home</span> */}
        </NavLink>
        <NavLink to="/" className="nav_item" onClick={handleActive}>
          <PeopleIcon></PeopleIcon>
          {/* <span className="tooltip">People</span> */}
        </NavLink>
        <NavLink to="/" className="nav_item" onClick={handleActive}>
          <VideoLibraryIcon></VideoLibraryIcon>
          {/* <span className="tooltip">Videos</span> */}
        </NavLink>
        <NavLink to="/" className="nav_item" onClick={handleActive}>
          <GroupWorkOutlinedIcon></GroupWorkOutlinedIcon>
          {/* <span className="tooltip">Groups</span> */}
        </NavLink>
      </div>
      <div className="header__right">
        <div>
          <Avatar></Avatar>
          <span>Mahmudur</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
