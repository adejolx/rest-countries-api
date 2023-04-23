import "./SearchBar.css";

const SearchBar = ({ ...restProps }) => {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        className="input input--search"
        placeholder="search for a country..."
        {...restProps}
      />
    </div>
  );
};
export default SearchBar;
