import React from "react";
import "./sidebar.scss";
import MenuItem from "../menu-item/menu-item";
import {
  FaClone,
  FaListUl,
} from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Sidebar(){
 
    const {firstName, lastName, jobRole} = useSelector(state => state.firebase.profile);
    
  

    return (
      <aside className = "sidebar">
        <div className="sidebar-container">
          <div className="user-info">
            {/* <FaUserAlt className='user-icon'/> */}
            <h3 className="primary-info">{firstName + " " + lastName}</h3>
            <p className="secondary-info">{jobRole}</p>
          </div>
          <div className="menu">
            <h3 className="secondary">MENU</h3>
            <NavLink to="/dashboard/">
              <MenuItem>
                <FaClone className="menu-icon icon" /> Feed
              </MenuItem>
            </NavLink>
            <NavLink to="/dashboard/articles">
              <MenuItem>
                <FaListUl className="menu-icon icon" />
                Articles
              </MenuItem>
            </NavLink>
            <NavLink to="/dashboard/gifs">
              <MenuItem>
                <MdGif className="menu-icon icon" />
                GIFs
              </MenuItem>
            </NavLink>
          </div>
          <IoIosLogOut className="exit-icon icon" />
        </div>
      </aside>
    );
  
}
export default Sidebar;
