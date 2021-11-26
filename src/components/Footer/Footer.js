import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="pt-70 bg-color-dark">
			<div className="container">
				<div className="row g-4 mb-5">
					<div className="col-sm-7">
						<div className="text-center menu-links">
							<h3 className="text-light fw-500 font-size-25 mb-4">Menu Links</h3>
							<ul>
								<li className="d-inline-block me-4">
									<Link to="/about" className="link text-center text-light fw-500 tran-2">About</Link>
								</li>
								<li className="d-inline-block me-4">
									<Link to="/services" className="link text-center text-light fw-500 tran-2">Services</Link>
								</li>
								<li className="d-inline-block me-4">
									<Link to="/courses" className="link text-center text-light fw-500 tran-2">Courses</Link>
								</li>
								<li className="d-inline-block">
									<Link to="/contact" className="link text-center text-light fw-500 tran-2">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-5 mt-5 mt-sm-0">
						<div className="text-center social-links">
							<h3 className="text-light fw-500 font-size-25 mb-4">Social Links</h3>
							<ul>
								<li className="d-inline-block me-4">
									<a href="https://web.facebook.com/saruarhosenn/" className="tran-2 text-light bg-color-green rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
								</li>
								<li className="d-inline-block me-4">
									<a href="https://www.linkedin.com/in/saruarhosenn/" className="tran-2 text-light bg-color-green rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<li className="d-inline-block me-4">
									<a href="https://twitter.com/saruarhosenn/" className="tran-2 text-light bg-color-green rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
								</li>
								<li className="d-inline-block">
									<a href="https://www.instagram.com/saruarhosenn/" className="tran-2 text-light bg-color-green rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>								
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright text-center py-5">
					<p className="text-light">Copyright &copy; 2021 Saruar Hosen All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;