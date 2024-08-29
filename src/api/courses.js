// src/api/courses.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoursesAPI = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          name: 'Introduction to React',
          instructor: 'John Doe',
          description: 'Learn React from scratch.',
          enrollmentStatus: 'Open',
          duration: '6 weeks',
          schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
          location: 'Online',
          prerequisites: ['Basic JavaScript'],
          syllabus: [
            { week: 1, topic: 'Introduction to React', content: 'Overview of React and setup' },
            { week: 2, topic: 'Components', content: 'Understanding React Components' },
          ],
          thumbnail: 'link_to_image',
        },
        // Add more courses
      ])
    , 1000)
  );
  return response;
});
