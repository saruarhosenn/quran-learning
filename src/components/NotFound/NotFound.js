import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
	return (
		<section id="notfound">
			<div class="notfound text-center">
				<div class="notfound-404">
					<h1 className="fw-bold">4<span>0</span>4</h1>
				</div>
				<p className="fw-500 text-light">Page Not Found</p>
				<Link to="/home" className="btn-404 link text-light fw-500">
					<span className="me-3">Home Page</span>
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
				</Link>
			</div>
		</section>
	);
};

export default NotFound;