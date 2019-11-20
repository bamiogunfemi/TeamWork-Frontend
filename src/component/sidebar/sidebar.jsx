import React from "react";
import "./sidebar.scss";
import MenuItem from "../menu-item/menu-item";
import { FaClone,FaCommentAlt,FaSortDownFaTrashAlt,FaListUl} from 'react-icons/fa';

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
          <h3>{this.state.user}</h3>
          <p className="secondary">{this.state.jobDes}</p>
        </div>
        <div className="menu">
          <p className="secondary">MENU</p>
    <MenuItem><FaClone/> Feed</MenuItem>
          <MenuItem><iOutlineBook/>Article</MenuItem>
          <MenuItem>GIF</MenuItem>
          
        </div>
      </div>
    );
  }
}
export default Sidebar;
