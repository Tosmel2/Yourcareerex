# BetWise - Sports Betting Platform (BetWise) 
## Instructions
### User Setup, Game Management & Bet mgt Logic
1. Register/login users with wallet balance.
2. Admin can create games with odds.
3. Define User, Game schemas.<br>
<strong>Milestone 2: Betting Logic</strong>
4. Users place bets on available games.[view image](#bet-placed)
5. Create Bet schema. [view image](#wallet-funded)
6. Deduct stake from wallet and record bet. [view image](#wallet-balance)<br>
<strong>Milestone 3: Results & Payouts</strong>
7. View Bet History [view image](#user-bet-history)
8. Set Game Results (Admin) [view image](#set-game-result)
9. View All Results [view image](#all-results)




## Environment Setup
### Setup Instructions
1. Clone this repository or extract the zip.
2. Run `npm install` to install dependencies.
3. Set up a MongoDB database and add the connection string to `.env`:
   ```
   PORT=5004
   MONGO_URI=mongodb://127.0.0.1:27017/betwise
   JWT_SECRET=betwise_jwt_secret_key
   ```
4. Start the server:
   ```
   npm run dev or nodemon server.js
   ```

### Folder Structure
<pre>
BetWise/
├── controllers/
│   ├── authController.js
│   └── gameController.js
│   └── betController.js
│   └── walletController.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Game.js
│   └── User.js
│   └── Wallet.js
│   └── Bet.js
├── routes/
│   ├── authRoutes.js
│   └── gameRoutes.js
│   └── betRoutes.js
│   └── walletRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
├── package.json
</pre>


## API Endpoints

| Method | Endpoint                | Access     | Description                   |
| ------ | ----------------------- | ---------- | ----------------------------- |
| POST   | `/api/v1/auth/register` | Public     | Register user                 |
| POST   | `/api/v1/auth/login`    | Public     | Login and get JWT             |
| GET    | `/api/v1/games     `    | Public     | List all games                |
| POST   | `/api/v1/games`         | admin only | Create a new game             |
| POST   | `/api/wallet/fund`      | public     | Fund Wallet Manually          |
| POST   | `/api/v1/bets`          | public     | Bet(stake) on games           |
| POST   | `/api/v1/wallet`        | public     | Wallet Balance After Stake    |
| GET    | `/api/v1/bets/history`  | public     | View Bet History              |
| GET    | `/api/v1/bets/results`  | public     | View bet Results              |
| POST   | `/games/:gameId/result` | admin only | Set Game Result               |



### Features
1. Implement user registration and login with JWT.
![User Registration](screenshots/register.png)

1. Implement user registration with Wallet Balance
![Register with walletBalance](screenshots/register-with-walletBalance.png)

2. ![User Login](screenshots/login.png)

3. Create Game by Admin.
![Create Game by Admin](screenshots/create-games2.png)

![Create Game by Admin](screenshots/create-games.png)

4. Get All Games.
![Get All Games](screenshots/get-all-games.png)

5. All Games DB.
![All Games on DB](screenshots/gamesDB.png)

6. All Users Details DB.
![All Users on DB](screenshots/usersDB.png)

7. <p id="wallet-funded">Wallet Funded(Manual).</p>
![Fund Wallet](screenshots/wallet_funded.png)

8. <p id="bet-placed">Bet(Stake) on Games.</p>
![Bet on Games](screenshots/bet-placed.png)

9. <p id="wallet-balance">Wallet Balance after Bet(Stake).</p>
![Wallet Balance](screenshots/wallet-balance-after-stake.png)

10. <p id="all-results">All Games Results.</p>
![Games Results](screenshots/all-results.png)

11. <p id="set-game-result">Set Game Result</p>
![Set Game Result](screenshots/set-game-result.png)

12. <p id="user-bet-hstory">Bet History</p>
![Wallet Balance](screenshots/user-bet-history.png)