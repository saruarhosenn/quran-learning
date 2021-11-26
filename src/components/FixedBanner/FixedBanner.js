import React from 'react';
import { Link } from 'react-router-dom';
import "./FixedBanner.css";

const FixedBanner = () => {
	return (
		<section className="fixed-banner">
			<div className="container text-center fixed-text">
				<h2 className="my-4 text-uppercase text-light font-size-45">Make Your Success a Priority.</h2>
				<h3 className="text-uppercase text-light font-size-25 mb-4">Begin your Educational Journey Today.</h3>
				<div className="mt-5">
					<Link to="/contact" className="btn-primary m-3">
						<span className="me-3">Contac Us</span>
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
					</Link>
					<Link to="/courses" className="btn-primary m-3">
						<span className="me-3">View Courses</span>
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FixedBanner;