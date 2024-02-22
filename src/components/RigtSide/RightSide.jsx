import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import Img from "../../imgs/profile.png";

const RightSide = () => {
  // Assume value is received as a prop or defined elsewhere
  const value = 75; // Example value for demonstration

  return (
    <div className="RightSide">
        <div style={{ display: 'flex', alignItems: 'center',justifyContent:"flex-end" }}>
       
      <div style={{ borderRadius: '10%', paddingLeft:"20px", paddingRight:"15px",backgroundColor: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
      <img src={Img} alt="Avatar" className="avatar" />
      <p style={{color:"gray"}}>Ankit Singh</p>
      </div>
    </div>
   
      <div style={{paddingTop:16}}>
        <Updates />
      </div>
      <div>
        <h3>Overall progress</h3>
        <CustomerReview value={value} /> {/* Pass value to the component */}
      </div>
    </div>
  );
};

export default RightSide;
