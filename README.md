# বাজার দর (Bazar Dor)

**Bazar Dor** is a web application that helps users explore the prices of everyday essential goods in Bangladesh. It provides an easy way to check product prices, compare price changes over time, and stay informed about market trends.

🌐 **Live Website:** [https://bazar-dor-plum-tau.vercel.app](https://bazar-dor-plum-tau.vercel.app)

## Features

- **Browse Products:** Explore a collection of everyday essential products.
- **Category-based Browsing:** Find products by their respective categories.
- **Product Details:** View detailed pricing information for individual products.
- **Price Comparison:** Compare today's prices with previous prices, including yesterday, last week, and last month.
- **Price Change Indicators:** Easily identify whether a product's price has increased, decreased, or remained unchanged.
- **User Authentication:** Create an account and sign in using email and password.
- **Social Authentication:** Sign in with Google or GitHub.
- **Responsive Design:** Access the application from desktop, tablet, and mobile devices.

## Tech Stack

**Frontend**

- Next.js
- React
- Tailwind CSS
- JavaScript

**Authentication**

- Better Auth
- Google OAuth
- GitHub OAuth

**Database**

- MongoDB Atlas

**Deployment**

- Vercel

**Additional Libraries**

- React Hot Toast
- React Fast Marquee

**Product Data API:** Programming Hero Open API

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/mdsakiblabs/bazar-dor.git
```

### 2. Navigate to the Project Directory

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_DB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Replace the placeholder values with your actual credentials.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Authentication Setup

Bazar Dor uses Better Auth for authentication.

To enable social login, configure your Google and GitHub OAuth applications with the appropriate local and production callback URLs.

**Google Callback URL:**

```text
http://localhost:3000/api/auth/callback/google
```

**GitHub Callback URL:**

```text
http://localhost:3000/api/auth/callback/github
```

For production, replace `http://localhost:3000` with your deployed domain.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## Data Disclaimer

Product prices are provided for informational purposes. Actual market prices may vary depending on location, market conditions, and availability.

## Author

**Md Sakib Hasan**

- GitHub: [@mdsakiblabs](https://github.com/mdsakiblabs)

---

Built with ❤️ to make everyday market price information easier to access.
