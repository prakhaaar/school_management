Install dependencies

bash
Copy
Edit
npm install
Configure environment variables

Create a .env file in the root directory with the following content:

env
Copy
Edit
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=3000
Setup MySQL database

Run the following SQL to create the schools table:

sql
Copy
Edit
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
Start the server

bash
Copy
Edit
npm start
Server runs on: http://localhost:3000

API Endpoints
Add a New School
URL: /addSchool

Method: POST

Payload:

json
Copy
Edit
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.3456,
  "longitude": 78.9012
}
Response:

json
Copy
Edit
{
  "message": "School added successfully."
}
List Schools by Proximity
URL: /listSchools

Method: GET

Query Parameters:

ini
Copy
Edit
latitude=<user_latitude>&longitude=<user_longitude>
Response:

json
Copy
Edit
[
  {
    "id": 1,
    "name": "School Name",
    "address": "Address",
    "latitude": 12.3456,
    "longitude": 78.9012,
    "distance": 2.34
  },
  ...
]
Distance is in kilometers and schools are sorted from nearest to farthest.


License
MIT License

Author
Prakhar 
GitHub


