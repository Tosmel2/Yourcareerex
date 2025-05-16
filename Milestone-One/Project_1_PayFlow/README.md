# PAYFLOW_WALLET - Fintech Digital Wallet System (PayFlow)
## Instructions
### User Authentication & Wallet Setup
1. Implement user registration and login with JWT.
2. Auto-create a wallet on user registration.
3. Setup MongoDB schemas: User and Wallet.

### Environment Setup
#### Setup Instructions
1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/payflow
   JWT_SECRET=payflow_jwt_secret_key
   ```
4. Start the server:
   ```
   node server.js or nodemon server.js
   ```

#### Folder Structure
<pre>
payflow-wallet-api/
├── controllers/
│   └── authController.js
│   └── walletController.js
├── models/
│   └── User.js
│   └── Wallet.js
├── routes/
│   └── authRoutes.js
│   └── walletRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
</pre>

### API Endpoints

| Method | Endpoint                     | Description                |
|--------|------------------------------|----------------------------|
| POST   | /api/auth                    | Register User              |
| POST   | /api/auth                    | Login User                 |
| GET    | /api/wallet                  | Get wallet                 |
| POST   | /api/wallet/fund             | Add funds to the wallet    |


### Features
1. Implement user registration and login with JWT.
![User Registration](screenshots/register-user.png)

![User Login](screenshots/login-user.png)

2. Get Wallet Balance.
![Get Wallet Balance](screenshots/wallet-balance.png)

3. Add Funds to the Wallet.
![Add Funds](screenshots/add-funds.png)

4. 2. Get Wallet Balance After Funded.
![Get Wallet Balance After funded](screenshots/wallet-balance-afterfunded.png)

