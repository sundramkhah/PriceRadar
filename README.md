# Price Comparison App

A portfolio-ready MERN grocery price comparison platform. The app compares grocery prices across provider connectors, normalizes results, highlights the best deal, and redirects users to the provider checkout page.

## Highlights

- MERN stack with React, Express, MongoDB, and Node.js.
- Provider/connector architecture for Blinkit, Instamart, BigBasket, and a generic grocery API.
- Parallel provider requests, normalized product contracts, fuzzy matching, best-price detection, and cache-first search.
- JWT authentication, bcrypt password hashing, validation, rate limiting, Helmet, CORS, compression, and centralized errors.
- Wishlist, search history, suggestions, sorting, filtering, responsive UI, empty states, and loading states.
- Redis support with in-memory fallback so the app runs even without Redis.

## Quick Start

```bash
npm run install:all
copy backend\.env.example backend\.env
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000/api/v1/health`

## Environment

Create `backend/.env` from `backend/.env.example`.

MongoDB is required for login, wishlist, and search history. The product comparison search still uses provider connectors and cache logic, so it is easy to swap mocked connectors with real API integrations later.

## Architecture

The backend follows controller -> service -> repository/provider layers. Controllers handle HTTP concerns, services own business rules, providers fetch external catalog data, repositories isolate database access, and middleware handles cross-cutting concerns.

The frontend follows route -> page -> feature component composition, with Redux Toolkit for auth/product/wishlist state and custom hooks for debounced search behavior.

## Provider Extension

Add a provider by extending `BaseProvider`, implementing `searchProducts(query)`, and registering it in `backend/src/providers/index.js`. Core business logic does not need to change.
