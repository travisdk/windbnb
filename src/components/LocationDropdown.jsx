import { useState } from "react";
import handleBlur from "../functions/blur.js";
import { useStaysContext } from "../context/StaysContext.jsx";
import "../css/LocationDropdown.css";

// locations are taken via Context later and originate from the JSON file in the example
// State globally must "also" keep the selected/current location & number of guests for search
// - via action for filtering

const LocationDropdown = () => {
  const { state, setCurrentLocation } = useStaysContext();
  const { locations, currentLocation } = state;

  const [active, setActive] = useState(false);

  const onLocationClick = (location) => {
    setCurrentLocation(location);
  };

  return (
    <div
      className="location-dropdown "
      onBlur={(e) => handleBlur(e, () => setActive(false))}>
      <div className="position-relative">
        <input
          type="text"
          className="form-control rounded-3 px-3 pt-3 "
          placeholder="Add location"
          value={
            currentLocation.city.length > 0
              ? currentLocation.city + ", " + currentLocation.country
              : ""
          }
          onFocus={() => setActive(true)}
          readOnly
        />
        <label
          htmlFor="location-input"
          className="location-dropdown-label form-label fw-bolder ">
          LOCATION
        </label>
      </div>
      {active && (
        <ul className="list-group location-dropdown-list w-100">
          {locations.map((location) => (
            <li
              className="list-group-item border-0"
              key={location.city + "#" + location.country}>
              <a
                href="#"
                className="text-decoration-none text-dark"
                onClick={() =>
                  onLocationClick({
                    city: location.city,
                    country: location.country,
                  })
                }>
                <span className="material-icons me-1">location_on</span>
                {location.city}, {location.country}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
