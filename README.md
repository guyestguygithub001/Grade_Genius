# GradeGenius MVP

# Project Overview
GradeGenius is a web application designed to assist university students in calculating their GPA and CGPA. It leverages course grades and credit units to provide accurate results. This MVP focuses on core functionalities while offering a user-friendly experience.

# Architecture

## Frontend
- **Single Page Application (SPA)**: Ensures a dynamic and efficient user experience.
- **Technologies**: Utilizes popular technologies like HTML, CSS, and JavaScript for development.

## Backend
- **RESTful API**: Developed with Flask (Python), a lightweight framework.
- **Functionality**: Manages data persistence and complex calculations.

## Database
- **MYSQL**: Chosen for its flexibility and scalability, ideal for storing user data and course information.

## APIs Used
The MVP requires minimal external APIs. The backend API handles:
- User authentication and registration.
- CRUD operations on user data and course information.
- An API endpoint for calculating GPA and CGPA.

# Data Modeling

## User
- `id`: Unique identifier
- `username`: User's chosen name
- `email`: Used for authentication
- `password`: Hashed for security
- `university`: Optional field for user's institution

## Course
- `id`: Unique identifier
- `course_name`: Name of the course
- `credit_unit`: Associated credit units
- `grade`: Letter grade or numerical equivalent
- `semester`: Optional, denotes the semester
- `year`: Optional, denotes the academic year
- `user_id`: Foreign key referencing the User

# MVP Features
- Functionality to add courses with credit units and grades.
- GPA calculation for a specific semester
- A clear and user-friendly interface for data entry and displaying results.

# Future Enhancements
- User registration and login system.
- Functionality to add courses with credit units and grades.
- GPA calculation for a specific semester (optional).
- CGPA calculation across all semesters.
- Support for various university grading systems.
- Historical data management for multiple semesters.
- Data export in formats like CSV and PDF.
- User role management (students, advisors).

# Getting Started
To get started with GradeGenius, head over to [Live Site.](https://wondahs.pythonanywhere.com/)

# Contributing
Contributions are welcome!

# Authors
- [Wonders Victor](https://github.com/Wondahs)
- [Daniel Ene](https://github.com/guyestguygithub001)
- [Oyadier Mensah](https://github.com/oyadier)
