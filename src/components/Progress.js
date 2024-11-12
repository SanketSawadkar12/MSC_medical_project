// import React from 'react';

// const Progress = ({ currentStep, totalSteps }) => {
//   const progress = ((currentStep - 1) / totalSteps) * 100;

//   return (
//     <div className="progress">
//       <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{`${progress}%`}</div>
//     </div>
//   );
// };

// export default Progress;
import React from 'react';
import './Progress.css'; // Import CSS file for additional styling

const Progress = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <div className="progress-value">{`${Math.round(progress)}%`}</div>
      </div>
    </div>
  );
};

export default Progress;

