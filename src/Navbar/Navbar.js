import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ trigger, setTrigger }) => {
	return (
		<div className="nav_mainDiv">
			<div className="nav_div1">
				<p>CodeNow</p>
			</div>
			<div className="nav_div2">
				<Link to="/" onClick={() => setTrigger(!trigger)}>
					Options
				</Link>
				<Link to="/about">About Us</Link>
			</div>
		</div>
	);
};

export default Navbar;
