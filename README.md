# School Management API

A Node.js RESTful API to manage school data, built with Express.js and MySQL.

---

## Features

- Add new schools with name, address, latitude, and longitude.
- Retrieve a list of schools sorted by proximity to a user’s location.
- Input validation and error handling.
- Distance calculation using the Haversine formula.

---

## Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv (for environment variables)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/prakhaaar/school_management.git
cd school_management

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


