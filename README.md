E-commerce Our E-com
Overview
Our E-com is a web-based e-commerce application designed to showcase a functional online shopping platform. The project prioritizes efficient data rendering, state management, and user authentication, using modern frontend and backend technologies. It leverages React for the user interface, Redux for state management, Bootstrap for responsive design, and a JSON Server with auth-json-server for a mock backend API. The app includes core e-commerce features like product display, user authentication, a shopping cart, and a wishlist, with a focus on clean data flow and rendering patterns.
Features

Product Display:
Fetches and displays product data (e.g., name, price, description) from a JSON server.
Supports dynamic rendering of product lists and individual product details.


User Authentication:
Sign-in and sign-up functionality powered by auth-json-server.
Secure user session management with token-based authentication.


Shopping Cart:
Add products to the cart, update quantities, and remove items.
Persists cart data per user session.


Wishlist:
Allows users to save products to a personalized wishlist.
Wishlist is tied to the authenticated user’s account.


State Management:
Uses Redux to manage application state, ensuring predictable data flow for cart, wishlist, and user data.


Responsive Design:
Built with Bootstrap for a mobile-friendly and visually consistent interface.



Technologies Used

Frontend:
React: JavaScript library for building dynamic and reusable UI components.
Redux: Centralized state management for handling cart, wishlist, and user data.
Bootstrap: CSS framework for responsive layouts and pre-styled components.


Backend:
JSON Server: A lightweight mock REST API for simulating product and user data.
auth-json-server: Middleware for handling user authentication (sign-in/sign-up).


Development Tools:
Node.js: Runtime environment for running the backend and frontend.
npm: Package manager for dependency installation.
Vite: Build tool for fast frontend development (used with npm run dev).



Prerequisites
Before running the project, ensure you have the following installed:

Node.js: Version 16 or higher.
npm: Version 8 or higher.
Git: For cloning the repository.
A modern web browser (e.g., Chrome, Firefox).

Installation and Setup
Follow these steps to set up and run the project locally:
1. Clone the Repository

3. Set Up the Backend

Navigate to the backend folder:cd backend


Install dependencies:npm install


Start the JSON server with authentication:npm start



The server provides endpoints for categories, products, users, and authentication.



3. Set Up the Frontend

Open a new terminal and navigate to the frontend folder:cd frontend


Install dependencies:npm install


Start the development server:npm run dev


This launches the React app (default: http://localhost:5173).



4. Access the Application

Open your browser and go to http://localhost:5173.
Ensure the backend server is running concurrently to handle API requests.
Sign up or sign in to explore features like the shopping cart and wishlist.

Project Structure
e-commerce/
├── backend/
│   ├── db.json               # Mock database for JSON Server
│   ├── package.json          # Backend dependencies and scripts
│   └── ...                  # Other backend files
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── redux/           # Redux store, actions, and reducers
│   │   ├── pages/           # Page components (e.g., Home, Product, Cart)
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point for React
│   ├── package.json         # Frontend dependencies and scripts
│   └── ...                  # Other frontend files
├── README.md                # This file

API Endpoints (Backend)
The JSON Server provides the following key endpoints:

Products: GET /products, GET /products/:id
Authentication:
POST /auth/register: Sign up a new user.
POST /auth/login: Sign in an existing user.


Cart/Wishlist: Managed via user-specific data (e.g., GET /users/:id/cart).

Development Notes

Data Rendering Patterns: The project uses React’s component-based architecture for modular rendering, with Redux ensuring efficient state updates across components.
State Management: Redux handles global state for products, cart, wishlist, and user authentication, reducing prop drilling and improving scalability.
Security: Ensure the backend server is running in a trusted environment. If you encounter a Git ownership error (e.g., fatal: detected dubious ownership), run:git config --global --add safe.directory 'D:/front end/projects 3/E-commerce '


Production Considerations: JSON Server is for development only. For production, replace it with a robust backend (e.g., Node.js with Express or a cloud-based API).

Troubleshooting

Backend Not Responding: Verify the JSON server is running on http://localhost:3000. Check for port conflicts.
Frontend Errors: Ensure dependencies are installed (npm install) and the backend is running before starting the frontend.
Authentication Issues: Confirm auth-json-server is properly configured in the backend.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License.
