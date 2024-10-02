import React from "react";
import "./Avatar.css";


const getUserInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
    return (
      nameParts[0][0].toUpperCase() +
      nameParts[nameParts.length - 1][0].toUpperCase()
    );
  };

  const getUserColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    // Generate RGB values between 100-255 for a more vibrant color
    const r = (hash & 0x7F) + 100; // Ensuring the value is between 100-255
    const g = ((hash >> 8) & 0x7F) + 100;
    const b = ((hash >> 16) & 0x7F) + 100;
  
    // Convert RGB values to hexadecimal and return the color string
    const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  
    return color;
  };
  
  
  
const Avatar=(props) => {

    const initials = getUserInitials(props.name);
    const color = getUserColor(props.name);
    console.log(color);
    console.log(initials);
    return <div className="user-avatar" style={{backgroundColor:color}}>{initials}</div>
};

export default Avatar;