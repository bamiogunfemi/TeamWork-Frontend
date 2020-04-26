import React from "react";
import "./sidebar.scss";
import MenuItem from "../menu-item/menu-item";
import { FaClone, FaListUl } from "react-icons/fa";
import { MdGif, MdAdd } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";

function Sidebar({ isSideBarOpenOnMobile, closeSideBar }) {
  const { firstName, lastName, jobRole } = useSelector(
    (state) => state.firebase.profile
  );

  if (window.matchMedia("(min-width:600px)").matches) {
    closeSideBar();
  }
  const firebase = useFirebase();

  return (
    <aside
      className={`sidebar ${
        isSideBarOpenOnMobile ? "mobile-open-sidebar" : ""
        }`}
    >
      <div className="sidebar-container">
        <div className="cancel-icon" onClick={closeSideBar}>
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
          </svg>
        </div>
        <div className="user-info">
          <h3 className="primary-info">{firstName + " " + lastName}</h3>
          <p className="secondary-info">{jobRole}</p>
        </div>
        <div className="menu">
          <h3 className="secondary">MENU</h3>
          <NavLink
            exact
            to="/dashboard/"
            activeClassName="active-dashboard-link"
          >
            <MenuItem>
              <FaClone className="menu-icon icon" /> Feed
            </MenuItem>
          </NavLink>
          <NavLink
            to="/dashboard/articles"
            activeClassName="active-dashboard-link"
          >
            <MenuItem>
              <FaListUl className="menu-icon icon" />
              Articles
            </MenuItem>
          </NavLink>
          <NavLink to="/dashboard/gifs" activeClassName="active-dashboard-link">
            <MenuItem>
              <MdGif className="menu-icon icon" />
                GIFs
              </MenuItem>
          </NavLink>
          <NavLink to="/dashboard/new" activeClassName="active-dashboard-link">
            <MenuItem>
              <MdAdd className="menu-icon icon" />
               New
              </MenuItem>
          </NavLink>
        </div>
        <IoIosLogOut className="exit-icon icon" onClick={() => firebase.logout()} />
      </div>
    </aside>
  );

}
export default Sidebar;
