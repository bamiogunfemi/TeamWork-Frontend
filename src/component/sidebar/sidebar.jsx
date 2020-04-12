import React from "react";
import "./sidebar.scss";
import MenuItem from "../menu-item/menu-item";
import {
  FaClone,
  FaCommentAlt,
  FaSortDownFaTrashAlt,
  FaListUl,
  FaUserAlt,
} from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "bami ogunfemi",
      feeds: "",
      isLoggedin: true,
      jobDes: "Frontend Developer",
    };
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="user-info">
          {/* <FaUserAlt className='user-icon'/> */}
          <h3 className="primary-info">{this.state.user}</h3>
          <p className="secondary-info">{this.state.jobDes}</p>
        </div>
        <div className="menu">
          <h3 className="secondary">MENU</h3>
          <Link to="/feeds">
            <MenuItem>
              <FaClone className="menu-icon icon" /> Feed
            </MenuItem>
          </Link>
          <Link to="/articles">
            <MenuItem>
              <FaListUl className="menu-icon icon" />
              Articles
            </MenuItem>
          </Link>
          <Link to="/gifs">
            <MenuItem>
              <MdGif className="menu-icon icon" />
              GIFs
            </MenuItem>
          </Link>
        </div>
        <IoIosLogOut className="exit-icon icon" />
      </div>
    );
  }
}
export default Sidebar;
