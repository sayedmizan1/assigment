// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import AddCourse from './components/AddCourse';
import NavBar from './components/NavBar';

const RoutesConfig = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/" element={<CourseList />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
