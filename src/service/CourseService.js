import axios from 'axios';

export const CourseService = {
    getAllCourses: function() {
        return axios.get("http://44.217.206.125:8080/courses") //Promise
    },
    getEnrolledCourses: function() {
    
    },
    enrollCourse: function() {

    },
    dropCourse: function() {

    }
}