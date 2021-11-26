import React from 'react';
import "./Service.css";

const Service = ({service}) => {
	const {title, description, image} = service;
	return (
		<div className="col-xl-3 col-lg-4 col-sm-6 translateY tran-1">
			<div className="p-4 service border shadow">
				<div className="mb-5 service-img">
					<img src={image} alt={title} className="" />
				</div>
				<div className="text-center">
					<h3 className="fw-bold mb-4 font-size-25">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Service;