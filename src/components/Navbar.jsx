import React from "react"
import star from "../logos/logo.svg"
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={star} alt="" onClick={ () => { navigate("./home") }} />
      <hr />

      <nav>
        <ul>

          <li>
            <NavLink to="/" >
              <span>
                <b>00</b>
              </span>{" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" >
              <span>
                <b>01</b>
              </span>{" "}
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" >
              <span>
                <b>02</b>
              </span>{" "}
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" >
              <span>
                <b>03</b>
              </span>{" "}
              Technology
            </NavLink>
          </li>

        </ul>
      </nav>

    </div>
  )
};

export default Navbar;
