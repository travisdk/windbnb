import { useState } from "react";

import "../css/GuestsDropdown.css";

const GuestsDropdown = (currentGuestsNumber, setCurrentGuestsNumber) => {
  return (
    <div className="guests-dropdown">
      <div className="position-relative">
        <input
          type="text"
          className="form-control rounded-3 px-3 pt-3 "
          placeholder="Add guests"
          id="guests-input"
        />
        <label
          htmlFor="guests-input"
          className="guests-dropdown-label form-label fw-bolder ">
          GUESTS
        </label>
      </div>
      <ul className="list-group guests-dropdown-list"></ul>
    </div>
  );
};

export default GuestsDropdown;
