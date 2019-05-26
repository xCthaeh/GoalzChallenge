import React from "react";

const Goals = ({ addGoal }) => {
  return (
    <form onSubmit={addGoal}>
      <p className="formItem label"> Goal: </p>
      <input placeholder="Goal" id="goalInput" className="formItem" />
      <p className="formItem label"> Due: </p>
      <input type="date" id="dateInput" className="formItem" />
      <button type="submit" className="formItem button">
        Add a Goal 🚀
      </button>
    </form>
  );
};

export default Goals;
