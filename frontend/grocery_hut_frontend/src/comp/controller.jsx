import React from "react";

const ControllerBar = ({ onClickHandler, onChangeHandler }) => (
  <div className="control card">
    <div className="flex">
      <h1 className="control--text">Add To List</h1>
      <input
        className="control--input"
        placeholder="eggs"
        onChange={(change) => onChangeHandler(change.target.value)}
      />
    </div>
    <button className="control--button" onClick={onClickHandler}>
      Add
    </button>
  </div>
);

export default ControllerBar;
