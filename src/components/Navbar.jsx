import React from "react"
import star from "../logos/logo.svg"
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={star} alt="" onClick={ () => { navigate("./space-tour-programe/") }} />
      <hr />

      <nav>
        <ul>

          <li>
            <NavLink to="/space-tour-programe/" >
              <span>
                <b>00</b>
              </span>{" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tour-programe/destination" >
              <span>
                <b>01</b>
              </span>{" "}
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tour-programe/crew" >
              <span>
                <b>02</b>
              </span>{" "}
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tour-programe/technology" >
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
