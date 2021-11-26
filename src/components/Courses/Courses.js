import React, { useEffect, useState } from 'react';
import Course from './Course/Course';

const Courses = () => {

	const [courses, setCourses] = useState([]);

	useEffect( () => {
		fetch("/courses.json")
			.then(response => response.json())
			.then(data => setCourses(data))
	}, []);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="font-size-45">Our Courses</h1>
					<hr className="line mx-auto mt-2" />
				</div>
				<div className="row g-4 mt-5">
					{
						courses.map(course => 
							<Course course={course} key={course.id} />
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Courses;