// src/redux/courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoursesAPI = createAsyncThunk('courses/fetchCourses', async () => {
  // Mock API call - replace with your actual API call
  return [
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
  ];
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
      console.log('New course added:', action.payload);
      console.log('Updated courses:', state.courses);
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter((course) => course.id !== action.payload);
      console.log('Course deleted:', action.payload);
      console.log('Updated courses:', state.courses);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesAPI.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoursesAPI.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCoursesAPI.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addCourse,deleteCourse } = courseSlice.actions;
export const selectCourses = (state) => state.courses;

export default courseSlice.reducer;
