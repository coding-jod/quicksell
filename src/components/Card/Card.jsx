import React from "react";
import "./Card.css";
import { getStatusIcon, getPriorityIcon } from "../../utils/helper";
import Avatar from "./Avatar";

const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) => {
  const priorityList = ["No Priority", "Low", "Medium", "High", "Urgent"];
  // console.log(userData);
  const username=userData.name;
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        {!hideProfileIcon && (
          <div className="user-avatar-wrapper">
            {/* <img src={userProfilePic} alt="User" className="user-avatar" /> */}
            <Avatar name={username}/>
            <span className={`active-status ${userData.available ? "active" : ""}`}></span>
          </div>
        )}
      </div>
      <div className="card-title-wrapper">
        {!hideStatusIcon && (
          <div className="status-icon">
            {getStatusIcon(ticket.status)}
          </div>
        )}
        <div className="card-title">{ticket.title}</div>
      </div>
      <div className="card-footer">
        {!hidePriorityIcon && (
          <div className="priority">
          {getPriorityIcon(priorityList[ticket.priority])}
        </div>
        )}

        {ticket.tag.map((t) => (
          <div className="feature-request" key={t}>
            <div className="feature-request-icon"></div>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
