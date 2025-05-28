# EDUCORE - E-Learning Platform Backend (EduCore) 
## Instructions
### Authentication & Courses, Enrollment Logic
1. Create user roles: instructor and student.
2. Instructors can create courses.
3. Setup schemas: User, Course. 
4. Students can enroll in available courses. [View Image](#enroll)
5. Create Enrollment schema.
6. Instructors can view enrolled students. [View Image](#view-enroll)
   <strong>Progress & Course Browsing</strong>
7. Students can view their enrolled courses.[View Image](#students-view-enrollcourse)
8. Add course detail route.
9. Add course completion status (simple boolean flag).[View Image](#completion-status)

## Environment Setup
### Setup Instructions
1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   PORT=5003
   MONGO_URI=mongodb://127.0.0.1:27017/educore
   JWT_SECRET=educore_jwt_secret_key
   ```
4. Start the server:
   ```
   npm run dev or nodemon server.js
   ```

### Folder Structure
<pre>
educore-backend/
├── controllers/
│   ├── authController.js
│   └── courseController.js
│   └── enrollmentController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Course.js
│   └── User.js
│   └── Enrollment.js
├── routes/
│   ├── authRoutes.js
│   └── courseRoutes.js
│   └── enrollmentRoutes.js
├── .env.example
├── app.js
├── package.json
├── README.md
└── config/
    └── db.js
</pre>


## API Endpoints

| Method | Endpoint                   | Access           | Description                   |
| ------ | -------------------------  | ---------------- | --------------------          |
| POST   | `/api/auth/register`       | Public           | Register user                 |
| POST   | `/api/auth/login`          | Public           | Login and get JWT             |
| GET    | `/api/courses   `          | Public           | List all courses              |
| POST   | `/api/courses   `          | Instructor only  | Create a course               |
| POST   | `/api/enroll    `          | Student          | Enroll for a course           |
| GET    | `/courses/:courseId/students`| Instructor only | View enrolled students        |
| GET    | `/api/courses/enrolled`     | Public           | View enrolled Courses         |
| GET    | `/api/courses/:courseId`    | Pubic            | View Course details           |
| POST   | `/courses/:courseId/complete`| Public          | Mark Course as Completed      |


### Features
1. Implement user registration with JWT.
![User Registration](screenshots/register.png)

2. Implement user login.
![User Login](screenshots/login.png)

2. Create courses by instructor.
![Create courses by instructor](screenshots/create-course.png)

3. Get All Courses.
![Get All Courses](screenshots/get-all-courses.png)

4. Properties on DB.
![Courses on DB](screenshots/coursesDB.png)

5. <p id="enroll">Student enrolls in a course</p>
![Student enrolls in a course](screenshots/enroll_course.png)

6. <p id="view-enroll">Instructor views students in a course</p>
![Instructor view student in a course](screenshots/view_student_in_a_course.png)

7. <p id="students-view-enrollcourse">Students View Enrolled Courses</p>
![Students View Enrolled Courses](screenshots/students-view-enrollcourse.png)

8. <p id="completion-status">Course Completion Status</p>
![Course Completion Status](screenshots/completion-status.png)


