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
| GET    | /api/categories              | Get All Categories         |
| POST   | /api/categories              | Create Category(Admin only)|
| POST   | /api/product                 | Create Product (Admin only)|

### Features
1. Implement user registration and login with JWT.
![User Registration](screenshots/register.png)

![User Login](screenshots/login.png)

2. Get All Categories.
![Get All Categories](screenshots/Get-all-categories(public).png)

3. Get All Products.
![Get All Products](screenshots/Get-all-products.png)

4. Create Category By Admin.
![Create Category By Admin](screenshots/create-category_byAdminOnly.png)

5. Create Product under Category
![Create Product under Category](screenshots/create-product-under_FruitsCategory.png)

6. Create Product under Category2.
![Create Product under Category](screenshots/create-product-undercategory.png)

6. As seen on DB
![Products and Categories](screenshots/categoriesDB.png)

![Products and Categories](screenshots/productsDB.png)


