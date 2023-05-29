import LocationDropdown from "./LocationDropdown";
import "../css/SearchModal.css";
import GuestsDropdown from "./GuestsDropdown";
import { useStaysContext } from "../context/StaysContext";
import SearchButton from "./SearchButton";
const Search = ({ expanded, onClose }) => {
  const { filterStays } = useStaysContext();

  const submitSearch = () => {
    filterStays();
    onClose();
  };
  return (
    expanded && (
      <div className="blurry">
        <div className="search-container">
          <div className="d-flex text-black justify-content-between justify-content-sm-end p-1">
            <p className="d-sm-none">Edit your search</p>
            <button
              type="button"
              className="btn btn-close"
              onClick={onClose}></button>
          </div>
          <div
            className="row rounded-4 border border-1 justify-content-center align-items-center g-0 position-relative"
            style={{ height: "55px", maxWidth: "1248px" }}>
            <div className="col-12 col-sm-4 ">
              <LocationDropdown />
            </div>
            <div className="col-12 col-sm-4">
              <GuestsDropdown />
            </div>
            <div className="col-12 col-sm-4 d-flex justify-content-center">
              <SearchButton submitSearch={submitSearch} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Search;
