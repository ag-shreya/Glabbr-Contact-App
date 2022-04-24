import { CgSearch } from "react-icons/cg";

function Search() {
  return (
    <div className="search-container">
      <form action="/search" method="get">
        <input
          className="search"
          id="searchleft"
          type="search"
          placeholder="Search"
        />
        <label className="btn btn-primary searchbutton" htmlFor="searchleft">
          <CgSearch />
        </label>
      </form>
    </div>
  );
}

export default Search;
