import { useMemo, useState } from "react";

import "../css/SearchDropdown.css";

// locations tages via Context sidenhen og stammer fra JSON fil i eksemplet
// State globalt skal "også" holde på valgte/current location & antal guests for søgning - via action for filtrering

const SearchDropdown = ({ locations = [] }) => {
  const [shownLocations, setShownLocations] = useState(locations);
  const [textFilter, setTextFilter] = useState("");
  const [currentLocation, setCurrentLocation] = useState({
    value: "",
    name: "",
  }); // evt tom !
  // hvordan BØR det virke? tom en mulighed? - vil mene ja -så man kan søge uden angivelse af bestemt location
  // måske kan man slette via indtasting i tekst-input.... (fjerne filteret helt)

  const hasLocations = useMemo(
    () => locations && locations.length > 1,
    [locations]
  );

  const onLocationClick = (value) => {
    console.log(value);
    const location = locations.find((loc) => loc.value === value);
    if (location.value !== currentLocation.value) setCurrentLocation(location);
  };

  const onLocationTextChange = (e) => {
    // filtrere via tekst på bynavn

    setTextFilter(e.target.value);
    console.log(textFilter);
    setShownLocations(
      shownLocations.filter(
        (loc) => loc.name.toLowerCase().indexOf(textFilter) > -1
      )
    );
  };

  return (
    <div className="search-dropdown">
      <input
        type="text"
        className="form-control rounded-3 px-2 py-2 mx-1 "
        value={textFilter}
        onChange={(e) => onLocationTextChange(e)}
      />
      {hasLocations && (
        <ul className="list-group search-dropdown-list">
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
  );
};

export default SearchDropdown;
