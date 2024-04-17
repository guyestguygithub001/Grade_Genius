 this is the directory for Gradegenius. the CGPA calculating app with  precise and specified functions


# GradeGenius MVP

# Project Overview
GradeGenius is a web application designed to assist university students in calculating their GPA and CGPA. It leverages course grades and credit units to provide accurate results. This MVP focuses on core functionalities while offering a user-friendly experience.

# Architecture

# Frontend
- **Single Page Application (SPA)**: Ensures a dynamic and efficient user experience.
- **Technologies**: Utilizes popular technologies like HTML, CSS, and JavaScript for development.

# Backend
- **RESTful API**: Developed with Flask (Python), a lightweight framework.
- **Functionality**: Manages data persistence and complex calculations.

# Database
- **MYSQL**: Chosen for its flexibility and scalability, ideal for storing user data and course information.

# APIs Used
The MVP requires minimal external APIs. The backend API handles:
- User authentication and registration.
- CRUD operations on user data and course information.
- An API endpoint for calculating GPA and CGPA.

# Data Modeling

# User
- `id`: Unique identifier
- `username`: User's chosen name
- `email`: Used for authentication
- `password`: Hashed for security
- `university`: Optional field for user's institution

# Course
- `id`: Unique identifier
- `course_name`: Name of the course
- `credit_unit`: Associated credit units
- `grade`: Letter grade or numerical equivalent
- `semester`: Optional, denotes the semester
- `year`: Optional, denotes the academic year
- `user_id`: Foreign key referencing the User

# MVP Features
- User registration and login system.
- Functionality to add courses with credit units and grades.
- GPA calculation for a specific semester (optional).
- CGPA calculation across all semesters.
- A clear and user-friendly interface for data entry and displaying results.

# Future Enhancements
- Support for various university grading systems.
- Historical data management for multiple semesters.
- Data export in formats like CSV and PDF.
- User role management (students, advisors).

# Getting Started
To get started with GradeGenius, clone the repository and follow the setup instructions detailed below.

# Prerequisites
- Python 3.6+
- MYSQL 5.7+
- Node.js 12+

# Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/gradegenius.git
   ```
2. Install backend dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Set up the MYSQL database:
   ```
   # Run the provided SQL scripts
   ```
4. Install frontend dependencies:
   ```
   npm install
   ```

# Running the Application
1. Start the backend server:
   ```
   python app.py
   ```
2. Launch the frontend:
   ```
   npm start
   ```

# Contributing
Contributions are welcome! Please read our contributing guidelines to get started.

# License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# Acknowledgments
- All contributors who have helped shape GradeGenius into what it is today.
```

This README provides an overview of the project, its architecture, and how to get started with it. It also outlines the future enhancements planned for the application. Feel free to customize it further to match your project's specifics!
