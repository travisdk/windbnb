import { useState } from "react";

import LocationDropdown from "./LocationDropdown";
import "../css/SearchModal.css";
import GuestsDropdown from "./GuestsDropdown";
import { useStaysContext } from "../context/StaysContext";
const Search = ({ expanded, onClose }) => {
  const { filterStays } = useStaysContext();

  const submitSearch = () => {
    filterStays();
    onClose();
  };
  return (
    expanded && (
      <div className="blurry">
        <div className="search-container d-flex justify-content-center ">
          <div
            className="row rounded-4 border border-1 align-items-center w-100 g-0"
            style={{ height: "55px", maxWidth: "1248px" }}>
            <div className="col-4 ">
              <LocationDropdown />
            </div>
            <div className="col-4">
              <GuestsDropdown />
            </div>

            <div className="col-4 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary text-white "
                style={{ minWidth: "128px", height: "48px" }}
                onClick={submitSearch}>
                <span>
                  Search<i className="bi bi-search ms-2"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Search;
