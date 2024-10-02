import noPriorityIcon from "../icons/No-priority.svg";
import lowPriorityIcon from "../icons/Img - Low Priority.svg";
import mediumPriorityIcon from "../icons/Img - Medium Priority.svg";
import highPriorityIcon from "../icons/Img - High Priority.svg";
import urgentPriorityIcon from "../icons/SVG - Urgent Priority colour.svg";

import backlogStatusIcon from "../icons/Backlog.svg";
import todoStatusIcon from "../icons/To-do.svg";
import inProgressStatusIcon from "../icons/in-progress.svg";
import doneStatusIcon from "../icons/Done.svg";
import canceledStatusIcon from "../icons/Cancelled.svg";

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <img src={noPriorityIcon} alt="No priority" />;
    case "Low":
      return <img src={lowPriorityIcon} alt="Low priority" />;
    case "Medium":
      return <img src={mediumPriorityIcon} alt="Medium priority" />;
    case "High":
      return <img src={highPriorityIcon} alt="High priority" />;
    case "Urgent":
      return <img src={urgentPriorityIcon} alt="Urgent priority" />;
    default:
      return <img src={noPriorityIcon} alt="No priority" />;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Backlog":
      return <img src={backlogStatusIcon} alt="Backlog status" />;
    case "Todo":
      return <img src={todoStatusIcon} alt="Todo status" />;
    case "In progress":
      return <img src={inProgressStatusIcon} alt="In progress status" />;
    case "Done":
      return <img src={doneStatusIcon} alt="Done status" />;
    case "Cancelled":
      return <img src={canceledStatusIcon} alt="Canceled status" />;
    default:
      return <img src={backlogStatusIcon} alt="Backlog status" />;
  }
};
