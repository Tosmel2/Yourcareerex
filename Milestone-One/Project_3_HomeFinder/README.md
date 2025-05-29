# HOMEFINDER - Real Estate Listing Platform (HomeFinder) 
## Instructions
### Roles & Property Listings
1. Setup user roles: agent and regular user.
2. Agents can add new property listings.
3. Define schemas: User, Property.
   <!-- Browsing & Saving Properties -->
4. Users can view all listings or a specific one.
5. Create SavedProperty schema and endpoint.
6. Allow users to save/unsave properties. [Go to Image](#saved-unsaved)
7. Add property filters by Location. [Go to Image](#property-by-location)
8. Add property filters by Location & price. [Go to Image](#property-by-price&Location)
9. Add property filters by Min & Max price range. [Go to Image](#property-by-priceRange)


## Environment Setup
### Setup Instructions
1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   PORT=5002
   MONGO_URI=mongodb://127.0.0.1:27017/homefinder
   JWT_SECRET=freshmart_jwt_secret_key
   ```
4. Start the server:
   ```
   npm run dev or nodemon server.js
   ```

### Folder Structure
<pre>
homefinder/
├── controllers/
│   ├── authController.js
│   └── propertyController.js
│   └── savedPropertyController.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Property.js
│   └── User.js
│   └── SavedProperty.js
├── routes/
│   ├── authRoutes.js
│   └── propertyRoutes.js
│   └── savedPropertyRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
├── package.json
</pre>


## API Endpoints

| Method | Endpoint                      | Access     | Description                   |
| ------ | --------------------          | ---------- | ----------------------------- |
| POST   | `/api/auth/register`          | Public     | Register user or agent        |
| POST   | `/api/auth/login`             | Public     | Login and get JWT             |
| GET    | `/api/properties`             | Public     | List all properties           |
| POST   | `/api/properties`             | Agent only | Create a new property listing |
| POST   | `/api/saved-properties/save`  | Public     | Saved a property              |
| POST   | `api/saved-properties/unsave` | Public     | Unsaved a saved properties    |
| GET    | `api/saved-properties/`       | Public     | Get all saved properties      |
| GET    | `api/properties?location=Lagos`       | Public     | Filter All Properties by Location      |
| GET    | `api/properties?minPrice=100000&maxPrice=500000`       | Public     | Filter All Properties by Minimum and Maximum Prices      |
| GET    | `api/properties?location=Lagos&maxPrice=300000`       | Public     | Filter All Properties by Location and Prices      |



### Features
1. Implement user registration with JWT.
![User Registration](screenshots/register.png)

2. Implement user login.
![User Login](screenshots/login.png)

2. Create Properties by agents.
![Create Properties by agents](screenshots/create-property.png)

3. Get All Properties.
![Get All Properties](screenshots/get-all-property.png)

4. Get All Update Properties.
![Get All Properties](screenshots/get-all-property2.png)

5. Properties on DB.
![Properties on DB](screenshots/propertiesDB.png)

6. <p id="#saved-unsaved">Allow users to save properties.</p>
![Saved Properties](screenshots/saved-property.png)

7. Allow users to unsave properties.
![Unsaved Properties](screenshots/unsaved-property.png)

8. Allow users to view all saved properties.
![All saved Properties](screenshots/all-saved-properties.png)

![All saved Properties one unsave](screenshots/all-saved-properties-after.png)

9. <p id="property-by-location">Add property filters by Location.</p>
![property filters by Location](screenshots/property-by-location.png)

10. <p id="property-by-price&Location">Add property filters by Location & price.</p>
![property filters by Location & price](screenshots/property-by-price&location.png)

11. <p id="property-by-priceRange">Add property filters by Min & Max price range.</p>
![filters by Min & Max price range](screenshots/property-by-priceRange.png)