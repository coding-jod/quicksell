import React from "react";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="navbar">
      <Dropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </div>
  );
};

export default Navbar;
