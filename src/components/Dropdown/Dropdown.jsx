import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import downIcon from "../../icons/down.svg";
import displayIcon from "../../icons/Display.svg";

const Dropdown = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);

  const openDropdown = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    },
    [componentRef]
  );

  const onGroupingChange = useCallback(
    (e) => {
      setGrouping(e.target.value);
      // setVisible(false);
    },
    [setGrouping]
  );

  const onOrderingChange = useCallback(
    (e) => {
      setOrdering(e.target.value);
      // setVisible(false);
    },
    [setOrdering]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="dropdown" ref={componentRef}>
      <button className="dropdown-toggle" onClick={openDropdown}>
        <img src={displayIcon} alt="display icon" className="display-icon" />
        <span className="display-text">Display</span>
        <img src={downIcon} alt="down icon" className="dropdown-icon" />{" "}
      </button>

      {visible && (
        <div className="dropdown-menu">
          <div className="dropdown-option">
            <label htmlFor="grouping">Grouping</label>
            <select
              name="grouping"
              id="grouping"
              className="dropdown-select"
              value={grouping}
              onChange={onGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-option">
            <label htmlFor="ordering">Ordering</label>
            <select
              name="ordering"
              id="ordering"
              className="dropdown-select"
              value={ordering}
              onChange={onOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
