import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light  justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button> */}
        </form>
      </nav>
    </div>
  );
};

export default Header;
