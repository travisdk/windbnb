import { useState } from "react";
import Search from "./SearchModal";
import { useStaysContext } from "../context/StaysContext";

import "../css/Header.css";
import logo from "../img/logo.svg";
const Header = () => {
  const { state, totalGuests } = useStaysContext();
  const { currentLocation } = state;
  const [searchExpandState, setSearchExpandState] = useState(false);

  const close = () => {
    setSearchExpandState(false);
  };
  const open = () => {
    setSearchExpandState(true);
  };
  return (
    <header className=" my-3">
      <div className="container  d-sm-flex  align-items-sm-center p-0 justify-content-between">
        <a href="#" className="navbar-brand">
          <img src={logo} className="my-3" alt="WindBnb logo" />
        </a>
        <div className="info-row row align-items-center rounded-4  g-0 mx-auto mx-sm-0">
          <div className="col-6  py-3 px-2">
            {currentLocation.city.length > 0 ? (
              <div className="">
                {currentLocation.city}, {currentLocation.country}
              </div>
            ) : (
              <div className="greyed">Add location</div>
            )}
          </div>
          <div className="col-4 py-3 px-2 border-start border-end border-1">
            {totalGuests > 0 ? (
              <div className="">{totalGuests} guests</div>
            ) : (
              <div className="greyed">Add guests</div>
            )}
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center  ">
            <button
              className="btn btn-outline-primary border-0 fs-5"
              onClick={() => open()}>
              <i className="material-icons ">search</i>
            </button>
          </div>
        </div>
      </div>
      <Search expanded={searchExpandState} onClose={() => close()} />
    </header>
  );
};
export default Header;
