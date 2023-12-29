import React from "react";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <div style={{ backgroundColor: "#6f42c1", padding: "10px", color: "#fff" }}>
      <div style={{ margin: "0 auto", maxWidth: "960px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "Bold", color: "#FFD700", fontSize: "1.5rem", fontWeight: "bold" }}>
          Back It
        </Link>
        <div id="navbar-items" style={{ display: "flex", alignItems: "center" }}>
          <Link to="/Category" style={{ marginLeft: "20px", textDecoration: "Bold", color: "#FFD700", fontSize: "1rem" }}>
            Tap Here
          </Link>
          {/* Add more navigation items as needed */}
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
