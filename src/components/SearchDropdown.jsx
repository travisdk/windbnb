import "../css/SearchDropdown.css";

const SearchDropdown = ({
  items = [{ value: "sel", name: "- select - " }],
}) => {
  return (
    <>
      <select className="search-dropdown form-select rounded-3 px-2 py-2 mx-1 ">
        {items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SearchDropdown;
