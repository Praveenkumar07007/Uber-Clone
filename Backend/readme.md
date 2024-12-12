# Backend API Documentation

## /users/register

### Endpoint
`POST /users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON response with the user details and an authentication token.

### Request

#### Headers
- `Content-Type: application/json`

#### Body
The request body should be a JSON object with the following fields:
- `firstname` (string, required): The first name of the user. Must be at least 2 characters long.
- `lastname` (string, required): The last name of the user. Must be at least 2 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
