# EDUCORE - E-Learning Platform Backend (EduCore) 
## Instructions
### Authentication & Courses
1. Create user roles: instructor and student.
2. Instructors can create courses.
3. Setup schemas: User, Course. 

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
   node server.js or nodemon server.js
   ```

### Folder Structure
<pre>
educore-backend/
├── controllers/
│   ├── authController.js
│   └── courseController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Course.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── courseRoutes.js
├── .env.example
├── app.js
├── package.json
├── README.md
└── config/
    └── db.js
</pre>


## API Endpoints

| Method | Endpoint             | Access           | Description                   |
| ------ | -------------------- | ---------------- | ----------------------------- |
| POST   | `/api/auth/register` | Public           | Register user                 |
| POST   | `/api/auth/login`    | Public           | Login and get JWT             |
| GET    | `/api/courses   `    | Public           | List all courses              |
| POST   | `/api/courses   `    | Instructor only  | Create a course               |


