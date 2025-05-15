# Lost & Found Backend API

This is a backend server for a campus Lost & Found system built using Node.js, Express, and MongoDB.

## Setup Instructions

1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/lost-and-found
   ```
4. Start the server:
   ```
   node server.js
   ```

## API Endpoints

| Method | Endpoint                     | Description                |
|--------|------------------------------|----------------------------|
| POST   | /api/items                   | Add a new item             |
| GET    | /api/items/unclaimed         | Get all unclaimed items    |
| GET    | /api/items/:id               | Get item by ID             |
| PUT    | /api/items/:id               | Update item details        |
| DELETE | /api/items/:id               | Delete item by ID          |

## Postman

Import `lost-found.postman_collection.json` into Postman to test the endpoints.


## Features

- Add a new found item
![Add found item](screenshots/Add_Found_Item.png)

- View all unclaimed items
![Get all items](screenshots/Get-all-items.png)

- View details of a single item
![Get an item](screenshots/Get-an-items.png)

- Update an item's info or claim status
![Update an item](screenshots/Update-an-item.png)

- Delete outdated items
![Delete an item](screenshots/Delete-an-item.png)

- Database
![All items in the database](screenshots/Lost-and-found_db.png)

![All items in the Atlas database](screenshots/Lost-and-found_db2.png)
