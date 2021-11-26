import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./CourseDetails.css";

const CourseDetails = () => {

	const { courseDetailsID } = useParams();
	const [courseDetails, setCourseDetails] = useState([]);
	const [details, setDetails] = useState([]);

	useEffect( () => {
		fetch("/courses.json")
			.then(response => response.json())
			.then(data => setCourseDetails(data))
	}, []);

	useEffect( () => {
		const detailsData = courseDetails.find(course => course.id === parseInt(courseDetailsID));
		setDetails(detailsData);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseDetails]);
	
	return (
		<section className="pt-70 pb-70 bg-color-light">
			<div className="container">
				<div className="text-center mb-5 pb-4">
					<h1 className="font-size-45 course-details-title">Course Details</h1>
					<hr className="line mx-auto mt-2" />
				</div>
				<div className="course-details mx-auto p-4 p-sm-5 border bg-white shadow">
					<div className="mb-5 course-details-img">
						<img src={details?.image} alt={details?.title} className="w-100" />
					</div>
					<div className="text-center">
						<h3 className="fw-bold mb-4 font-size-25">{details?.title}</h3>
						<p>{details?.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseDetails;