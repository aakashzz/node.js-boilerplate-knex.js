# Node.js Boilerplate with knex.js

## Description

A clean and secure backend boilerplate built with Node.js, Express.js, Knex.js, and PostgreSQL. This setup includes best practices like request logging, security headers, rate limiting, and data sanitization, allowing developers to skip basic configuration and start building features immediately.

## Features

- **Express.js** server setup
- **Knex.js** as SQL query builder with migration/seeding support
- **PostgreSQL** database integration
- **Security**
  - `helmet` for setting secure HTTP headers
  - `express-rate-limit` for basic rate limiting
  - `xss-clean` or `sanitize-html` for input sanitization
- **Winston / Morgan** based request logging
- CORS enabled and customizable
- Environment-based config using `.env`
- Ready for Docker deployment (optional)
- Easily testable and extendable structure
---

## 📂 Folder Structure
project-root/
├── migrations/
├── src/
│ ├── controllers/
        └── index.js
│ ├── routes/
        └── index.js
│ ├── middlewares/
        └── index.js
│ ├── db/
│ │    └── database.js
│ ├── utils/
│ ├── config/
│ └── index.js (entry point)
│── knexfile.js
├── .env
├── package.json
└── README.md

## Prerequisites

- Node.js (v18.x or higher)
- PostgreSQL
- Postman or any API testing tool (Optional, for testing API)

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/aakashzz/node.js-boilerplate-knex.js.git
cd node.js-boilerplate-knex.js

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Setup `.env`**:

    Create a `.env` file based on `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your environment variables:
    ```plaintext
    PORT=3000
    ORIGIN= your origin
    DB_URI= your PostgreSQL DB connection string
    ```

---

## Environment Variables

- **PORT**: Port for the server to run on.
- **ORIGIN**: ORIGIN 
- **DB_URI**: PostgreSQL connection string (local or remote).

---


## Running the Application

1. **Start PostgreSQL DB**:

   Make sure PostgreSQL is running locally or use a cloud PostgreSQL service like Prisma/PostgreSQL.

   For local PostgreSQL Admin, start
   

2. **Start the server**:

In your project directory, run the following command:

npm run dev
The API will be available at http://localhost:3000.

## License 📄

This project is licensed under the MIT License. See the `LICENSE` file for more details.

```text
MIT License

Copyright (c) 2025 Aakash Malviya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
