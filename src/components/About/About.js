import React from 'react';
import AboutDesc from './AboutDesc/AboutDesc';

const About = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5 pb-5">
					<h1 className="font-size-45">About Us</h1>
					<hr className="line mx-auto mt-2" />
				</div>
				<AboutDesc />
				<div className="row mt-5">
					<div className="col-12">
						<div className="mt-5">
							<h5 className="font-size-18 fw-bold mb-4">Who We Are</h5>
							<p>
								We are a team of Muslims who are eager to spread the message of the Quran & the Sunnah through the most easy and effective learning methods. We have a team who are promoting and thinking how Muslim can touched with Quran & Sunnah.Specially we are looking for Bangladeshi who are residing abroad. Money is not our target, trying to spread proper Islam to them. We offer courses that help you read and learn the Holy Quran in the most easy and engaging way. if you are interested to join, please complete the registration form. We will communicate with you. For any further discussion/ clarification, you may also call us at our local numbers.
							</p>
							<p className="py-4">
								If the participants are kids, don’t worry the offer is covering kids too, and our tutors are a highly experienced to teach the kids with the funniest and easiest ways to teach them Arabic & Quran.
							</p>
							<p>
								All courses will be held online through “Skype”, which is the most reliable choice we have, also we’re working now on having our own Communication platform in the near future to be more professional and usable InShaAllah.	
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;