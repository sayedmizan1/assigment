// src/components/CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectCourses } from '../redux/courseSlice';
import { selectCourses } from '../redux/coursesSlice';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector(state => selectCourses(state).find(c => c.id === parseInt(courseId)));

  if (!course) return <div>Course not found.</div>;

  return (
    <div>
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <p><strong>Syllabus:</strong></p>
      <ul>
        {course.syllabus.map((week, index) => (
          <li key={index}>
            <strong>Week {week.week}:</strong> {week.topic} - {week.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
