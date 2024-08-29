// src/redux/studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      const course = action.payload;
      console.log(course.enrollmentStatus);
      if (course.enrollmentStatus === "Closed") {
        alert("You cannot enroll in this course because enrollment is closed.");
        state.isEnrollButtonDisabled = true;
      } else {
        if (!state.enrolledCourses.find((c) => c.id === course.id)) {
          state.enrolledCourses.push({ ...course, completed: false });
        }
        state.isEnrollButtonDisabled = false;
      }
    },

  markCourseCompleted: (state, action) => {
    const course = state.enrolledCourses.find((c) => c.id === action.payload);
    if (course) {
      course.completed = true;
    }
  },
},
});

export const { enrollCourse, markCourseCompleted } = studentSlice.actions;
export const selectEnrolledCourses = (state) => state.students.enrolledCourses;

export default studentSlice.reducer;
