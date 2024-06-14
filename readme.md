
# Car Rental Reservation System Backend API with Express, TypeScript, MongoDB, and Mongoose

# Installation
This project is an Car Rental Reservation System Backend API built with Express and TypeScript, using MongoDB with Mongoose for data management. Data validation is handled using zod.



 **Clone the repository**

   ```bash
   git clone https://github.com/mdrafi276/Car-Rental-Reservation-System-Backend.git

   cd Car-Rental-Reservation-System-Backend
  
```
📦 Install Dependencies

---
```bash

$ npm install

```
# ⚙️ Configure Environment Variables
## Create a `.env` file in the root of the project and add the following environment variables:

```bash
PORT=5000
DB_URI="mongodb://localhost:27017/Car-Rental-Reservation"

```




# Running the app

```TYPESCRIPT
# watch mode
$ npm run start:dev


# production mode
$ npm run start:prod

```
The server should be running on http://localhost:5000.


<!-- . -->
## Features


- **Product Management**
  - Create a new product
  - Retrieve all products
  - Retrieve a specific product by ID
  - Update product information
  - Delete a product
  - Search for products by name

- **Order Management**
  - Create a new order
  - Retrieve all orders
  - Retrieve orders by user email
  - Update inventory when an order is created


## Available API Endpoints
### 🛍️ Product Management

#### 1. Create a New Product
- **Endpoint:** `/api/auth/signup`
- **Method:** `POST`

#### 2. Retrieve All Products

- **Endpoint:** `/api/auth/signin`
- **Method:** `GET`

#### 3. Retrieve Specific Product by ID

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`

#### 4. Update Product Information

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`

#### 5. Delete a Product

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`

#### 6. Search a Product

- **Endpoint:** `/api/products?searchTerm=iphone`
- **Method:** `GET`

### 🛒 Order Management

#### 1. Create a New Order

- **Endpoint**: `/api/orders`
- **Method**: `POST`

#### 2. Retrieve All Orders

- **Endpoint**: `/api/orders`
- **Method**: `GET`

#### 3. Retrieve Orders by User Email

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method**: `GET`

# linting

## Ensure the code adheres to a consistent style by running:

```TYPESCRIPT
npm run lint
```
# LINTING FIX
## Fix the code by running:
```TYPESCRIPT
npm run lint:fix

```