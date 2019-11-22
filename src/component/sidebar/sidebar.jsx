import React from "react";
import "./sidebar.scss";
import MenuItem from "../menu-item/menu-item";
import { FaClone,FaCommentAlt,FaSortDownFaTrashAlt,FaListUl,FaUserAlt,} from 'react-icons/fa';
import { MdGif,MdReorder } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io"

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "bami ogunfemi",
      feeds: "",
      isLoggedin: true,
      jobDes: "Frontend Developer"
    };
  }
  
  render() {
    return (
      <div className="Sidebar">
        <div className="user-info">
        <FaUserAlt className='user-icon'/>
          <h3>{this.state.user}</h3>
          <p className="secondary">{this.state.jobDes}</p>
        </div>
        <div className="menu">
          <p className="secondary">MENU</p>
          <MenuItem><FaClone className='menu-icon'/> Feed</MenuItem>
          <MenuItem><FaListUl className='menu-icon'/>Articles</MenuItem>
          <MenuItem><MdGif className='menu-icon'/>GIFs</MenuItem>
          
        </div>
        <IoIosLogOut className='exit-icon'/>
      </div>
    );
  }
}
export default Sidebar;
