# FRESHMART - Supermarket E-Commerce Backend (FreshMart) 
## Instructions
### Authentication & Product Catalog
1. User/admin registration & login.
2. Implement role-based access control.
3. Create Category & Product schemas.
4. Admin can create categories and products.
##### Product Browsing & Orders
5. Users can browse products and view product details. [Go to Image](#get-products-details)
6. Users can place orders with multiple items. [Go to Image](#multiple-orders-post)
7. Users can view their orders details.. [Go to Image](#order-details)


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
   npm run dev or nodemon server.js
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
│   └── orderController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Category.js
│   └── Order.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── categoryRoutes.js
│   └── orderRoutes.js
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
| POST   | /api/orders                  | Create Orders (Public)     |
| POST   | /api/orders/history          | Get all Orders (Public)    |
| POST   | /api/orders/:orderId          | User View Order Details (Public)    |

### Features
1. Implement user registration and login with JWT.
![User Registration](screenshots/register.png)

![User Login](screenshots/login.png)

2. Get All Categories.
![Get All Categories](screenshots/Get-all-categories(public).png)

3. Get All Products.
![Get All Products](screenshots/Get-all-products.png)

4. Get All Products.
![Get All Products](screenshots/Get-all-products2.png)

5. <p id="get-products-details">Get Products details.</p>
![Get Products details](screenshots/Get-products-details.png)

6. Create Category By Admin.
![Create Category By Admin](screenshots/create_category_byAdminOnly.png)

7. Create Product under Category
![Create Product under Category](screenshots/create-product-under_FruitsCategory.png)

8. Create Product under Category2.
![Create Product under Category](screenshots/create-product-undercategory.png)

9. As seen on DB
![Products and Categories](screenshots/categoriesDB.png)

![Products and Categories](screenshots/productsDB.png)

![Products and Categories](screenshots/productsDB2.png)

10. <p id="multiple-orders-post">Authenticated users can place orders with multiple items (POST /api/orders).</p>
![Orders with Multiple Items](screenshots/place-orders.png)

11.<p id="multiple-orders-post"> Users view all orders history placed.</p>
![Get all orders history](screenshots/users-order-history.png)

12.<p id="order-details"> User View order details</p>
![User View order details](screenshots/order-details.png)