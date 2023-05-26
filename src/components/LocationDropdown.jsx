import { useState } from "react";

import "../css/LocationDropdown.css";

// locations tages via Context sidenhen og stammer fra JSON fil i eksemplet
// State globalt skal "også" holde på valgte/current location & antal guests for søgning - via action for filtrering

const LocationDropdown = ({
  locations = [],
  currentLocation,
  setCurrentLocation,
}) => {
  // not DRY
  const initialLocation = {
    value: "",
    name: "",
  };
  const [shownLocations, setShownLocations] = useState(locations);
  const [textFilter, setTextFilter] = useState("");

  const onLocationClick = (value) => {
    const location = locations.find((loc) => loc.value === value);
    if (location.value !== currentLocation.value) {
      setCurrentLocation(location);
      setTextFilter(location.name);
    }
  };

  const onLocationTextChange = (e) => {
    const newVal = e.target.value;
    const foundLocation = locations.find((loc) => loc.name === newVal);
    if (foundLocation) {
      setCurrentLocation(foundLocation); // typing in full name will set current location
    } else {
      setCurrentLocation(initialLocation); // clearing if non-valid location name
    }
    setTextFilter(newVal);
    setShownLocations(
      locations.filter(
        (loc) => loc.name.toLowerCase().indexOf(newVal.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="location-dropdown">
      <div className="position-relative">
        <input
          type="text"
          className="form-control rounded-3 px-3 pt-3 "
          placeholder="Add location"
          value={textFilter}
          onChange={(e) => onLocationTextChange(e)}
          id="location-input"
        />
        <label
          htmlFor="location-input"
          className="location-dropdown-label form-label fw-bolder ">
          LOCATION
        </label>
      </div>
      <div className="position-relative">
        {shownLocations.length > 0 && (
          <ul className="list-group location-dropdown-list">
            {shownLocations.map((location) => (
              <li className="list-group-item border-0" key={location.value}>
                <a
                  href="#"
                  className="text-decoration-none text-dark"
                  onClick={() => onLocationClick(location.value)}>
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
