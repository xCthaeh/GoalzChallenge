import React from "react";

const SingleGoal = ({ goal, date }) => {
  return (
    <div>
      <p> Goal: {goal} 🚀</p>
      <p className="due"> Due: {date}</p>
    </div>
  );
};

export default SingleGoal;
