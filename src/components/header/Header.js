import { Link } from "react-router-dom";
import worldref from "./worldref.jpg";
function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div className="logo-div">
            <img src={worldref} alt="" />
            <p className="logo-text">Worldref</p>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {props.login && (
          <div>
            <a className="logout" onClick={props.onLogout}>
              Logout
            </a>
          </div>
        )}
        {!props.login && (
          <div>
            <Link className="logout" to={"/login"}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
