 this is the directory for Gradegenius. the CGPA calculating app with precise and specified functions.

# README for GRADEGENIUS MVP Web Application

## Project Overview
The GRADEGENIUS MVP is a web application designed to assist university students in calculating their GPA and CGPA based on their course grades and credit units. This Minimum Viable Product (MVP) focuses on core functionalities to provide users with a seamless and user-friendly experience.

## Architecture
### Frontend
- Utilizes a Single Page Application (SPA) for dynamic and efficient user interaction.
- Developed using HTML, CSS, and JavaScript for a responsive user interface.

### Backend
- Employs a RESTful API built with Flask (Python) to handle data persistence and calculations.
- Ensures smooth user experience by managing user data and course information.

### Database
- MYSQL is chosen for its flexibility and scalability in storing user data and course information.

## APIs Used
The backend API primarily focuses on:
- User authentication and registration.
- CRUD operations for managing user data and course information.
- API endpoint for calculating GPA and CGPA based on user input.

## Data Modeling
### User
- Attributes include unique identifier, username, email (for authentication), hashed password for security, and optional university information.

### Course
- Attributes consist of a unique identifier, course name, credit unit, grade (letter or numerical), semester and year (optional), and a foreign key referencing the User.

## MVP Features
- User registration and login functionality.
- Ability to add courses with credit units and grades.
- Calculate GPA for a specific semester (optional).
- Calculate CGPA for all semesters.
- Display a clear and user-friendly interface for data entry and results.

## Future Enhancements
- Implement features to accommodate different grading systems used by various universities.
- Allow users to save and manage historical data for multiple semesters.
- Integrate functionalities to export data in various formats (CSV, PDF).
- Implement features for managing different user roles (students, advisors).

This README provides an overview of the GRADEGENIUS MVP Web Application, outlining its architecture, features, and future enhancements. For detailed technical instructions, please refer to the GRADEGENIUS MVP Specification document.

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/12400308/cbc52ebc-0707-4f42-a882-30eb0b01bb2c/GRADEGENIUS MVP Specification.pdf
