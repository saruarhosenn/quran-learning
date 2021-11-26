import React from 'react';
import about from "../../../Images/about.jpg";
import "./AboutDesc.css";

const AboutDesc = () => {
	return (
		<div className="row g-5 align-items-center">
			<div className="col-lg-6">
				<div className="about-desc">
					<h4 className="font-size-25 fw-500">About Us</h4>
					<h2 className="text-uppercase font-size-30 my-4">LEARN QURAN ONLINE BD</h2>
					<p>
						We are Providing Online Holy Quran Classes All Over The World.Specially Learn Quran Online Bd is looking for Bangladeshi who are residing abroad. Let's learn Quran Online with one of the best Online Quran Learning Academy. We are providing online Quran teaching service to kids and adults, male and female across the globe. Our Quran learning courses are specially designed for you and your kids. Under the guidance of qualified Quran Tutors, we will provide you step by step Quran Learning with the rules of Tajweed and essential Islamic knowledge. Are you looking for an online Quran tutor for yourself or for your children, let’s learn Quran with online Quran tutor in one-to-one Quran class at the comfort of your home.
					</p>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="about-img shadow">
					<img src={about} alt="about" className="w-100" />
				</div>
			</div>
		</div>
	);
};

export default AboutDesc;