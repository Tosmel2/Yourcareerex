# FRESHMART - Supermarket E-Commerce Backend (FreshMart) 
## Instructions
### Authentication & Product Catalog
1. User/admin registration & login.
2. Implement role-based access control.
3. Create Category & Product schemas.
4. Admin can create categories and products.

## Environment Setup
### Setup Instructions
1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   PORT=5001
   MONGO_URI=mongodb://127.0.0.1:27017/freshmart
   JWT_SECRET=freshmart_jwt_secret_key
   ```
4. Start the server:
   ```
   node server.js or nodemon server.js
   ```

### Folder Structure
<pre>
freshmart-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── categoryController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Category.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── categoryRoutes.js
├── utils/
│   └── generateToken.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
</pre>

## API Endpoints

| Method | Endpoint                     | Description                |
|--------|------------------------------|----------------------------|
| POST   | /api/auth                    | Register User              |
| POST   | /api/auth                    | Login User                 |
| GET    | /api/products                | Get All Products           |
| POST   | /api/category                | Create Category            |
| POST   | /api/product                 | Create Product             |

