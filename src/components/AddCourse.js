// src/components/AddCourse.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../redux/coursesSlice';

const AddCourse = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    id: '',
    name: '',
    instructor: '',
    description: '',
    enrollmentStatus: 'Open',
    duration: '',
    schedule: '',
    location: '',
    prerequisites: '',
    syllabus: [],
    thumbnail: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const handleAddSyllabus = () => {
    setCourse({
      ...course,
      syllabus: [...course.syllabus, { week: course.syllabus.length + 1, topic: '', content: '' }],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse({ ...course, id: Date.now() }));
    console.log('Course added:', course);  // Log to verify the course data
    setCourse({
      id: '',
      name: '',
      instructor: '',
      description: '',
      enrollmentStatus: 'Open',
      duration: '',
      schedule: '',
      location: '',
      prerequisites: '',
      syllabus: [],
      thumbnail: '',
    });
  };

  return (

       <form onSubmit={handleSubmit}>
      <div>
        <label>Course Name:</label>
        <input name="name" value={course.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Instructor:</label>
        <input name="instructor" value={course.instructor} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={course.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Enrollment Status:</label>
        <select name="enrollmentStatus" value={course.enrollmentStatus} onChange={handleChange}>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>
      <div>
        <label>Duration:</label>
        <input name="duration" value={course.duration} onChange={handleChange} required />
      </div>
      <div>
        <label>Schedule:</label>
        <input name="schedule" value={course.schedule} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <input name="location" value={course.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Prerequisites (comma-separated):</label>
        <input name="prerequisites" value={course.prerequisites} onChange={handleChange} required />
      </div>
      <div>
        <label>Thumbnail URL:</label>
        <input name="thumbnail" value={course.thumbnail} onChange={handleChange} required />
      </div>

      <div>
        <label>Syllabus:</label>
        {course.syllabus.map((week, index) => (
          <div key={index}>
            <label>Week {week.week}:</label>
            <input
              name={`syllabus-topic-${index}`}
              placeholder="Topic"
              value={week.topic}
              onChange={(e) =>
                setCourse({
                  ...course,
                  syllabus: course.syllabus.map((w, i) =>
                    i === index ? { ...w, topic: e.target.value } : w
                  ),
                })
              }
              required
            />
            <input
              name={`syllabus-content-${index}`}
              placeholder="Content"
              value={week.content}
              onChange={(e) =>
                setCourse({
                  ...course,
                  syllabus: course.syllabus.map((w, i) =>
                    i === index ? { ...w, content: e.target.value } : w
                  ),
                })
              }
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSyllabus}>
          Add Week
        </button>
      </div>

      
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
