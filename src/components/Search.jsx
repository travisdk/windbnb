import LocationDropdown from "./LocationDropdown";
import "../css/Search.css";

const Search = ({ expanded, onClose }) => {
  // todo => JSON etc
  const locations = [
    { value: "HEL", name: "Helsinki, Finland" },
    { value: "TUR", name: "Turku, Finland" },
  ];

  return (
    expanded && (
      <div className="blurry">
        <div className="search-container">
          <div
            className="row rounded-4 border border-1 align-items-center   "
            style={{ height: "55px" }}>
            <div className="col-4">
              <LocationDropdown locations={locations} />
            </div>
            <div className="col-4">
              <LocationDropdown locations={locations} />
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary text-white "
                style={{ minWidth: "128px", height: "48px" }}
                onClick={onClose}>
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
