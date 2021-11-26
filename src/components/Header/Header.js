import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
	return (
		<header className="shadow py-2">
			<nav className="navbar navbar-expand-md position-relative">
				<div className="container">
					{/*----- Logo -----*/}
					<div className="logo">
						<Link to="/home">
							<img src={logo} alt="logo" />
							<span className="text-dark font-size-18 fw-bold">Al-Quran</span>
						</Link>
					</div>

					{/*------ Toggle Btn ------*/}
					<div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<i class="fas fa-bars text-dark font-size-30"></i>
					</div>

					{/*---- Main Menu ----*/}
					<div className="bg-light main-menu collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="p-5 p-md-0 navbar-nav text-center text-md-start">
							<li className="nav-item me-md-5 mb-3 mb-md-0">
								<NavLink to="/home" activeStyle={{color: "#00AA55"}} className="tran-2 fw-500 text-color-dark font-size-18">Home</NavLink>
							</li>
							<li className="nav-item me-md-5 mb-3 mb-md-0">
								<NavLink to="/about" activeStyle={{color: "#00AA55"}} className="tran-2 fw-500 text-color-dark font-size-18">About</NavLink>
							</li>
							<li className="nav-item me-md-5 mb-3 mb-md-0">
								<NavLink to="/services" activeStyle={{color: "#00AA55"}} className="tran-2 fw-500 text-color-dark font-size-18">Services</NavLink>
							</li>
							<li className="nav-item me-md-5 mb-3 mb-md-0">
								<NavLink to="/courses" activeStyle={{color: "#00AA55"}} className="tran-2 fw-500 text-color-dark font-size-18">Courses</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" activeStyle={{color: "#00AA55"}} className="tran-2 fw-500 text-color-dark font-size-18">Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;