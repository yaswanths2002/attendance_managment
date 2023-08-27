import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Attandance Managmment</h1>
      <div className="header-sub">
        <Link className="header-buttons" to={"/"}>
          Subject List
        </Link>
        <Link className="header-buttons" to={"/form"}>
          Mark Attandance
        </Link>
        <Link className="header-buttons" to={"/status"}>
          Attandance Status
        </Link>
      </div>
    </div>
  );
};

export default Header;
