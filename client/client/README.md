Marvel Movie Manager
This is a MEVN (MongoDB, Express, Vue.js, Node.js) project that allows users to manage a list of Marvel movies.

Installation
Navigate to the project directory: cd marvel-movie-manager
Install dependencies:
Backend: cd server && npm install
Frontend: cd ../client && npm install
Create a .env file in the server directory with the following content:
makefile
Copy code
PORT= 1000
DB_URI=mongodb://localhost/marvel-movie-manager
Replace the DB_URI value with the URI for your MongoDB database.
Start the server: cd server && npm run dev
Start the client: cd ../client && && cd ../client && npm run serve
Open http://localhost:8080 in your browser.
Usage
API endpoints
The following endpoints are available:

GET /api/movies: Get a list of all movies.
POST /api/movies: Create a new movie.
GET /api/movies/:id: Get a specific movie by ID.
PUT /api/movies/:id: Update a specific movie by ID.
DELETE /api/movies/:id: Delete a specific movie by ID.
Frontend
The main page of the app displays a table of all movies in the database. You can add a new movie by clicking the "Add Movie" button and filling out the form. You can edit or delete an existing movie by clicking the corresponding buttons in the "Actions" column of the table.

Backend
The backend uses Express to define the API routes and Mongoose to interact with the MongoDB database. The schema for the Movie model is defined in server/models/Movie.js, and the API routes are defined in server/routes/movies.js.

