import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

	const [services, setServices] = useState([]);

	useEffect( () => {
		fetch("/services.json")
			.then(response => response.json())
			.then(data => setServices(data))
	}, []);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="font-size-45">Our Services</h1>
					<hr className="line mx-auto mt-2" />
				</div>
				<div className="row g-4 mt-5">
					{
						services.map(service => 
							<Service service={service} key={service.id} />
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Services;