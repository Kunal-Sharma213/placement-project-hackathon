import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
	return (
		<header className="header">
			<div class="website-name">WEBSITE NAME</div>
			<nav className="main-nav">
				<ul className="main-nav-list">
					<li>
						<Link to="/about" className="main-nav-link">
							<p>About Us</p>
						</Link>
					</li>
					<li>
						<Link to="/company" className="main-nav-link">
							<p>Company</p>
						</Link>
					</li>
					<li>
						<Link to="/education" className="main-nav-link">
							<p>Education</p>
						</Link>
					</li>
					<li>
						<Link to="/internships" className="main-nav-link">
							<p>Internships</p>
						</Link>
					</li>
					<li>
						<Link to="/vacancies" className="main-nav-link">
							<p>Current Vacancies</p>
						</Link>
					</li>
					<li>
						<Link to="/" className="btn">
							<p>Join Us</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
