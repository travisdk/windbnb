// import Search from "./Search";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header my-3 ">
      <div className="container d-flex  align-items-center p-0">
        <a href="#" className="navbar-brand mb-2 ms-1">
          <img src="../../res/logo.svg" alt="WindBnb logo" />
        </a>
        <div className="d-flex align-items-center border border-1 rounded-4  ms-auto">
          <div className="mx-2  py-3 px-2">Helsinki, Finland</div>

          <div className="mx-2 border-start border-end border-1 py-3 px-2 text-muted">
            Add guests
          </div>

          <button className="btn btn-outline-primary border-0  fs-5 me-3">
            <i className="bi bi-search "></i>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
