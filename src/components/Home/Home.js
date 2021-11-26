import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutDesc from '../About/AboutDesc/AboutDesc';
import FixedBanner from '../FixedBanner/FixedBanner';
import Service from '../Services/Service/Service';
import "./Home.css";

const Home = () => {

	const [services, setServices] = useState([]);
	const [service, setService] = useState([]);

	useEffect( () => {
		fetch("/services.json")
			.then(response => response.json())
			.then(data => setServices(data))
	}, []);

	useEffect(() => {
		const content = services.filter(service => service.category);
		setService(content);
	}, [services]);

	return (
		<main>

			{/* Start Hero Section */}
			<section className="hero-banner">
				<div className="container">
					<div className="hero-title">
						<h2 className="text-uppercase text-light font-size-25">your trusted</h2>
						<h1 className="text-uppercase text-light font-size-45">prepare students <br className="breack" /> for future success
						</h1>
						<p className="text-light text-capitalize">online quran classes at your home.</p>
						<Link to="/services" className="btn-primary">
							<span className="me-3">Services</span>
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
						</Link>
					</div>
				</div>
			</section>
			{/* End Hero Section */}
			
			{/* Start About Section */}
			<section className="pt-70 pb-70 bg-color-light">
				<div className="container">
					<AboutDesc />
					<div className="mt-5">
						<Link to="/about" className="btn-primary">
							<span className="me-3">Read More</span>
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
						</Link>
					</div>
				</div>
			</section>
			{/* End About Section */}

			{/* Start Services Section */}
			<section className="pt-70 pb-70">
				<div className="container">
					<div className="text-center mb-5">
						<h1 className="font-size-45">Our Services</h1>
						<hr className="line mx-auto mt-2" />
					</div>
					<div className="row g-4 mt-5">
						{
							service.map(quranContent => 
								<Service service={quranContent} />
							)
						}
					</div>
					<div className="mt-5 text-center">
						<Link to="/services" className="mt-5 btn-primary">
							<span className="me-3">More Services</span>
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
						</Link>
					</div>
				</div>
			</section>
			{/* End Services Section */}

			{/* Start Fixed Banner Section */}
			<FixedBanner />
			{/* End Fixed Banner Section */}

		</main>
	);
};

export default Home;