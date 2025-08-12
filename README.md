# 🔗 Shrink.ly - URL Shortener

A simple and efficient URL shortener service built with Node.js, Express, and MongoDB. Transform long URLs into short, manageable links with click analytics.

## ✨ Features

- 🎯 **URL Shortening**: Convert long URLs into short 8-character links
- 📊 **Analytics**: Track click counts and visit history
- 🔄 **Auto Redirect**: Seamless redirection from short URLs to original URLs
- ⚡ **Fast**: Built with Express.js for optimal performance
- 💾 **Persistent Storage**: MongoDB integration for data persistence
- 🕒 **Timestamps**: Automatic creation and update tracking

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd shrink-ly
```

2. **Install dependencies**
```bash
npm install
```

3. **Start MongoDB**
Make sure MongoDB is running on `mongodb://localhost:27017`

4. **Run the application**
```bash
npm start
```

The server will start on `http://localhost:8001`

## 📡 API Endpoints

### Create Short URL
**POST** `/url`

Create a new short URL from a long URL.

**Request Body:**
```json
{
  "url": "https://www.example.com/very/long/url/path"
}
```

**Response:**
```json
{
  "id": "abc12345"
}
```

### Get Analytics
**GET** `/url/analytics/:shortId`

Retrieve analytics data for a specific short URL.

**Response:**
```json
{
  "totalClicks": 5,
  "analytics": [
    {
      "timestamp": 1642680000000
    },
    {
      "timestamp": 1642683600000
    }
  ]
}
```

### Redirect
**GET** `/:shortId`

Redirects to the original URL and records the visit.

**Example:**
- Visit: `http://localhost:8001/abc12345`
- Redirects to: `https://www.example.com/very/long/url/path`

## 🧪 Testing with Postman

### Creating a Short URL
1. **Method**: POST
2. **URL**: `http://localhost:8001/url`
3. **Headers**: 
   - `Content-Type: application/json`
4. **Body** (raw JSON):
```json
{
  "url": "https://www.google.com"
}
```

### Getting Analytics
1. **Method**: GET
2. **URL**: `http://localhost:8001/url/analytics/{shortId}`
   - Replace `{shortId}` with the ID returned from creating a URL

### Testing Redirect
1. Open browser or use GET request
2. Navigate to: `http://localhost:8001/{shortId}`
3. You'll be redirected to the original URL

## 🏗️ Project Structure

```
shrink-ly/
├── controllers/
│   └── url.js          # URL handling logic
├── models/
│   └── url.js          # MongoDB URL schema
├── routes/
│   └── url.js          # URL routes definition
├── connect.js          # MongoDB connection
├── index.js            # Main server file
└── package.json        # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **ID Generation**: nanoid for unique short IDs
- **Middleware**: Express JSON parser, URL encoder

## 📝 Database Schema

The URL model contains:
- `shortId`: Unique 8-character identifier
- `redirectURL`: Original long URL
- `visitHistory`: Array of visit timestamps
- `createdAt`, `updatedAt`: Automatic timestamps

## 🔧 Environment Setup

Make sure you have:
```bash
# MongoDB running
mongod --dbpath /your/db/path

# Dependencies installed
npm install express mongoose nanoid
```

## 🚨 Error Handling

The API handles common errors:
- **400 Bad Request**: Missing URL in request body
- **404 Not Found**: Short URL doesn't exist
- **500 Internal Server Error**: Database or server issues

## 🎯 Usage Examples

### Using cURL

**Create short URL:**
```bash
curl -X POST http://localhost:8001/url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.example.com"}'
```

**Get analytics:**
```bash
curl http://localhost:8001/url/analytics/abc12345
```

## 📊 Features in Detail

### URL Shortening
- Generates unique 8-character IDs using nanoid
- Stores original URL with timestamp
- Handles duplicate URL creation

### Analytics Tracking
- Records every visit with timestamp
- Provides total click count
- Returns complete visit history

### Auto Redirect
- Seamless redirection to original URLs
- Updates visit history on each access
- Returns 404 for invalid short URLs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running on port 27017
- Check if the database name is correct

**Cannot read properties of undefined**
- Verify Content-Type header is set to `application/json`
- Ensure request body contains the `url` field

**Server not starting**
- Check if port 8001 is available
- Verify all dependencies are installed

---
