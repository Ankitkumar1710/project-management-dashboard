import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function CustomerReview({ value }) {
  // Determine colors based on progress value
  let color1 = '#F44336'; // Red
  let color2 = '#FFEB3B'; // Yellow
  let color3 = '#4CAF50'; // Green

  // Determine the value range for each color
  let range1 = 33;
  let range2 = 6;
  let range3 = 12;

  // Determine the values for each CircularProgress component
  let value1 = Math.min(value, range1) / range1 * 100;
  let value2 = Math.max(0, Math.min(value - range1, range2 - range1)) / (range2 - range1) * 100;
  let value3 = Math.max(0, value - range2) / (100 - range2) * 100;

  return (
    <div style={{ backgroundColor: '#EBDFD7', padding: 20 }}>
      <div style={{ position: 'relative', width: 100, height: 100 }}>
        {/* First CircularProgress for the red portion */}
        <CircularProgress
          variant="determinate"
          value={value1}
          size={100}
          thickness={5}
          style={{ color: color1, position: 'absolute', zIndex: 1, clip: 'rect(0, 50px, 100px, 0)' }}
        />
        {/* Second CircularProgress for the yellow portion */}
        <CircularProgress
          variant="determinate"
          value={value2}
          size={100}
          thickness={5}
          style={{ color: color2, position: 'absolute', zIndex: 2, clip: 'rect(0, 100px, 100px, 50px)' }}
        />
        {/* Third CircularProgress for the green portion */}
        <CircularProgress
          variant="determinate"
          value={value3}
          size={100}
          thickness={5}
          style={{ color: color3, position: 'absolute', zIndex: 1, clip: 'rect(0, 100px, 100px, 50px)' }}
        />
        {/* Optional: Centered text */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
          <span style={{ fontSize: 20 }}>{`${value}%`}</span>
        </div>
      </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <div style={{ width: '25%', textAlign: 'center' }}>95</div>
        <div style={{ width: '25%', textAlign: 'center' }}>26</div>
        <div style={{ width: '25%', textAlign: 'center' }}>35</div>
        <div style={{ width: '25%', textAlign: 'center' }}>35</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
      <p style={{ width: '25%', textAlign: 'center', color:"gray", fontSize:12}}>Project</p>
        <p style={{ width: '25%', textAlign: 'center',color:"gray", fontSize:12 }}>Completed</p>
        <p style={{ width: '25%', textAlign: 'center', color:"gray", fontSize:12 }}>Delay</p>
        <p style={{ width: '25%', textAlign: 'center',color:"gray", fontSize:12 }}>On going</p>
      </div>
    </div>
   

   
  );
}

export default CustomerReview;
