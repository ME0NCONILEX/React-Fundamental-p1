import React from 'react';

const ObsMessage = (props) => {
  return (
    <div className={`alert alert-${props.type}`}>
      {props.message}
    </div>
  );
};

export default ObsMessage;
