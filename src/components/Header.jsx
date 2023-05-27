import { useState } from "react";

import Search from "./SearchModal";
import "../css/Header.css";
import { useStaysContext } from "../context/StaysContext";
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
    <header className="header my-3 ">
      <div className="container d-flex  align-items-center p-0">
        <a href="#" className="navbar-brand mb-2 ms-1">
          <img src="../../res/logo.svg" alt="WindBnb logo" />
        </a>
        <div className="d-flex align-items-center border border-1 rounded-4  ms-auto">
          {currentLocation.city.length > 0 ? (
            <div className="mx-2  py-3 px-2">
              {currentLocation.city}, {currentLocation.country}
            </div>
          ) : (
            <div className="mx-2  py-3 px-2 text-muted">Add location</div>
          )}
          {totalGuests > 0 ? (
            <div className="mx-2  py-3 px-2">{totalGuests} guests</div>
          ) : (
            <div className="mx-2 border-start border-end border-1 py-3 px-2 text-muted">
              Add guests
            </div>
          )}
          <button
            className="btn btn-outline-primary border-0 fs-5 me-3"
            onClick={() => open()}>
            <i className="bi bi-search "></i>
          </button>
        </div>
      </div>
      <Search expanded={searchExpandState} onClose={() => close()} />
    </header>
  );
};
export default Header;
