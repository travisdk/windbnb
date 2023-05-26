import { useState } from "react";

import LocationDropdown from "./LocationDropdown";
import "../css/SearchModal.css";
import GuestsDropdown from "./GuestsDropdown";

const Search = ({ expanded, onClose }) => {
  // Not DRY
  const initialLocation = {
    value: "",
    name: "",
  };

  const [currentLocation, setCurrentLocation] = useState(initialLocation);
  const [currentGuestsNumber, setCurrentGuestsNumber] = useState(0);

  // todo => JSON etc
  const locations = [
    { value: "HEL", name: "Helsinki, Finland" },
    { value: "TUR", name: "Turku, Finland" },
  ];

  const submitSearch = () => {
    // State submit here .... => filter re both Location and Guests to be send as an action for state change.
    // TODO
    onClose();
  };
  return (
    expanded && (
      <div className="blurry">
        <div className="search-container d-flex justify-content-center ">
          <div
            className="row rounded-4 border border-1 align-items-center w-100"
            style={{ height: "55px", maxWidth: "1248px" }}>
            <div className="col-4 ">
              <LocationDropdown
                locations={locations}
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
              />
            </div>
            <div className="col-4">
              <GuestsDropdown
                currentGuestsNumber={currentGuestsNumber}
                setCurrentGuestsNumber={setCurrentGuestsNumber}
              />
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
