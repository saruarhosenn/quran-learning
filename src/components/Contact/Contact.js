import React from 'react';
import "./Contact.css";

const Contact = () => {
	return (
		<section className="pt-70 pb-70 bg-color-light">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="font-size-45">Get In Touch</h1>
					<hr className="line mx-auto mt-2" />
				</div>
				<div className="row g-5 mt-5">
					<div className="col-lg-4 col-md-6">
						<div className="icon text-center shadow-lg bg-white">
							<a class="p-5 d-block" href="tel:+8801750543533">
								<i class="fas fa-phone font-size-45 text-color-green"></i>
								<p className="font-size-18 fw-500 mt-4 text-color-dark">+8801750543533</p>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="icon text-center shadow-lg bg-white">
							<a class="p-5 d-block" href="mailto:saruarhosen525@gmail.com">
								<i class="fas fa-envelope font-size-45 text-color-green"></i>
								<p className="font-size-18 fw-500 mt-4 text-color-dark">saruarhosen525@gmail.com</p>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="p-5 icon text-center shadow-lg bg-white">
							<i class="fas fa-university font-size-45 text-color-green"></i>
							<p className="font-size-18 fw-500 mt-4 text-color-dark">Sylhet, Bangladesh</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;