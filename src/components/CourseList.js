// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoursesAPI,addCourse ,deleteCourse } from '../redux/coursesSlice';
import { enrollCourse } from '../redux/studentSlice';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCoursesAPI();
      dispatch(addCourse(data));
    };
    // loadCourses();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };
  

  const filteredCourses = Array.isArray(courses) ? courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (course.instructor && course.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : courses;
  const handleEnroll = (course) => {
    dispatch(enrollCourse(course));
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
    {Array.isArray(filteredCourses) && filteredCourses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link> - {course.instructor}
            <button onClick={() => handleEnroll(course)}>Enroll</button>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
