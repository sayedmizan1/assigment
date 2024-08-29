import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEnrolledCourses, markCourseCompleted } from '../redux/studentSlice';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(selectEnrolledCourses);

  return (
    <div>
      <h2>My Courses</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <img src={course.thumbnail} alt={course.name} />
            <p>{course.name}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <progress value={course.completed ? 100 : 0} max="100"></progress>
            <button onClick={() => dispatch(markCourseCompleted(course.id))}>
              {course.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;