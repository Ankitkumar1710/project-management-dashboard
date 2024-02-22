import React from "react";
import "./Updates.css";
import Img from "../../imgs/profile.png";

const Updates = ({ avatarUrl }) => {
  return (
    <div className="Updates">
      <div className="update-container">
          <div className="text-container">
          <img src={Img} alt="Avatar" className="avatar" />
          <p style={{color:'gray'}}>Resources</p>
          <div style={{ fontSize: 24, fontWeight: 'bold' }}>101/120</div>
          <p style={{fontSize:14}}>2% increase from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
