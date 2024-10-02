# Node.js CRUD Operations

This repository contains a simple CRUD (Create, Read, Update, Delete) application built with Node.js using the `require` syntax. The application demonstrates basic CRUD operations on a MongDB database.

## Table of Contents

- Installation
- Usage
- API Endpoints
- Contributing
- License

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

    - Ensure you have Mongodb local or Mongodb atlas installed and running.
    - Create a database named `crud_db`.
    - Update the database configuration in `config/db.js` with your MySQL credentials.

4. **Run the application:**

    ```bash
    node app.js
    ```

## Usage

Once the application is running, you can interact with the API using tools like Postman or cURL.

## API Endpoints

- **Create a new record:**

    ```http
    POST /api/records
    ```

    **Request Body:**

    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com"
    }
    ```

- **Read all records:**

    ```http
    GET /api/records
    ```

- **Read a single record:**

    ```http
    GET /api/records/:id
    ```

- **Update a record:**

    ```http
    PUT /api/records/:id
    ```

    **Request Body:**

    ```json
    {
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
    }
    ```

- **Delete a record:**

    ```http
    DELETE /api/records/:id
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
