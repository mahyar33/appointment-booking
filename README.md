# Appointment Booking

This is the backend implementation for an appointment booking system built with NestJS and PostgreSQL. It supports scheduling appointments and managing bookings via REST API endpoints. The backend is fully containerized using Docker Compose.

## Project Structure

- **Backend Framework:** NestJS
- **Database:** PostgreSQL (running in Docker)
- **Containerization:** Docker & Docker Compose
- **Validation:** class-validator with custom decorators
- **ORM:** TypeORM
- **Frontend Framework:** React
- **Frontend Components:**
  - Date picker for selecting dates.
  - Slot list display with available times.
  - Booking confirmation modal.

```plaintext
appointment-booking
├── backend
│   ├── src
│   │   ├── slots
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── docker-compose.yml
├── docker
│   ├── Dockerfile.database
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── init.sql
└── README.md
```

---

## Getting Started

### **1. Installation(Docker Setup)**

Make sure you have **Docker** and **Docker Compose** installed on your system.

**Docker Services**

- **Database:** PostgreSQL with Docker
- **Backend:** NestJS API service
- **Frontend:** React + Vite app

### **2. Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/mahyar33/appointment-booking.git
   cd appointment-booking
   ```
2. Create a `.env` file with the following environment variables (already set in both .env and `docker-compose.yml` for the test purpose but it's not recommended to put sensitive data in the repo):
   ```env
   DATABASE_HOST=database
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=mypassword123!
   DATABASE_NAME=coding-challenge
   ```

### **3. Start the Services**

```bash
docker-compose up --build
```

This will build the backend and database services, exposing the API on **http://localhost:3000** and run react on **http://localhost:5173**.

---

---

## **Frontend Setup (React + Vite)**

### **Installation**

```bash
cd frontend
npm install
```

### **Run the Application**

```bash
npm run dev
```

**Access the Frontend:**

- Local: [http://localhost:5173](http://localhost:5173)

---

## **Backend Setup (NestJS)**

### **Installation**

```bash
cd backend
yarn install
```

### **Run the Application**

```bash
yarn start:dev
```

**Access the API:**

- Local: [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

### **1. View Available Slots**

**Endpoint:** `GET /slots?date={ISO8601_DATE}`

**Query Parameters:**

- `date`: ISO 8601 formatted date (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ssZ`)

**Response Example:**

```json
[
  {
    "id": 1,
    "start_date": "2024-05-01T09:00:00.000Z",
    "end_date": "2024-05-01T10:00:00.000Z",
    "booked": false,
    "booked_by": "John Doe"
  }
]
```

### **2. Book a Slot**

**Endpoint:** `POST /slots/:id/book`

**Request Body:**

```json
{
  "name": "John Doe"
}
```

**Response Example:**

```json
{
  "id": 1,
  "start_date": "2024-05-01T09:00:00.000Z",
  "booked": true,
  "booked_by": "John Doe"
}
```

---

## Trade-offs and Improvements

### **What Was Implemented:**

1. **Strict Adherence to Specified Rules:** All requested features and services were implemented.
2. **Validation:**
   - Custom date validation using `class-validator`.
   - DTOs for request validation.
3. **Modular Structure:** Following NestJS best practices.
4. **Database Integration:** Full PostgreSQL integration with Docker.
5. **Code Readability & Testability:**
   - Code is clean, modular, and follows SOLID principles.
   - Validation and services are independently testable.
6. **Efficiency and Performance:** The frontend uses Vite, which provides fast build times and an optimized development environment for React.

### **Potential Improvements:**

1. **Automated Tests:** Add integration and unit tests for the backend and frontend.
2. **API Documentation:** Use Swagger for API documentation.
3. **Error Responses:** Implement a more consistent error-handling structure.
4. **Database Performance Optimization:** Add database indexing if required for larger datasets.
5. **UI/UX:** Improve frontend components in order to have better UI/UX.

---

Let me know if you need further updates! 🚀
