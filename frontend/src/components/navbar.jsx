import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="font-bold">Alliance</Link>
      <div>
        <Link to="/" className="mr-4">Input Form</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
