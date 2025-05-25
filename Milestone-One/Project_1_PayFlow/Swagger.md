1. Install Swagger Dependencies
Run in your project root:

npm install swagger-jsdoc swagger-ui-express

<!-- ========================== -->

2. Create Swagger Configuration
Create a new file:
Milestone-One/Project_1_PayFlow/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PayFlow API',
      version: '1.0.0',
      description: 'API documentation for the PayFlow project',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Change to your server port if different
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./routes/*.js', './controllers/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

<!-- ======================= -->
3. Set Up Swagger UI in Your Main Server File
Edit your server.js (or app.js):

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Adjust path if needed

const app = express();

// ... your other middleware and routes

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ...rest of your server setup

<!-- ================================ -->
4. Add Swagger Comments to Your Routes
Example for authRoutes.js:
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', authController.login);

Add similar comments for other routes (wallet, transfer, etc.).

<!-- =============================================== -->

5. View Your API Docs
Start your server and visit:

http://localhost:5000/api-docs

(Adjust port if needed.)

<!-- ====================================== -->

6. 6. Tips for Good Swagger Docs
Use @swagger comments above each route.
Group endpoints with tags.
Document request bodies, parameters, and responses.
Add security info for JWT-protected routes.

<!-- ================================ -->
7. Example: Wallet Funding Route
/**
 * @swagger
 * /api/wallet/fund:
 *   post:
 *     summary: Fund your wallet
 *     tags: [Wallet]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Wallet funded
 *       400:
 *         description: Invalid amount
 *       404:
 *         description: Wallet not found
 */
router.post('/fund', auth, walletController.fundWallet);

<!-- ================================== -->

8. Summary
Install swagger-jsdoc and swagger-ui-express
Create a Swagger config file
Add Swagger UI to your Express app
Document your routes with @swagger comments
Access docs at /api-docs