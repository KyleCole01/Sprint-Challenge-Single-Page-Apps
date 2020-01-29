import React from "react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
  return (
    <div>
      <div>
        <NavLink className="navitem" to={`/welcome`}>
          Home
        </NavLink>
        <NavLink className="navitem" activeClassName="active" to={`/character`}>
          Characters
        </NavLink>
        <NavLink className="navitem" activeClassName="active" to={`/location`}>
          Location
        </NavLink>
        <NavLink className="navitem" activeClassName="active" to={`/episode`}>
          Epidode
        </NavLink>
        <NavLink className="navitem" activeClassName="active" to={`/search`}>
          Search
        </NavLink>
      </div>
    </div>
  );
}
