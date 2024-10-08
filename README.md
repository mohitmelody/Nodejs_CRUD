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
    git clone https://github.com/mohitmelody/Nodejs_CRUD.git
    cd Nodejs_CRUD
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
    POST /api/v1/createTodo
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
    GET /api/v1/getTodo
    ```

- **Read a single record:**

    ```http
    GET /api/v1getTodoById/:id
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
    DELETE /api/deleteTodo/:id
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

