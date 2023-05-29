import "../css/SearchButton.css";

const SearchButton = ({ submitSearch }) => {
  return (
    <button
      type="button"
      className="btn btn-primary search-btn text-white"
      onClick={submitSearch}>
      <i className="material-icons">search</i>
      <span className="p-1">Search</span>
    </button>
  );
};
export default SearchButton;
