# Express Server

This is a simple Express server project that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── app.js          # Entry point of the application
├── Dockerfile          # Dockerfile to build the server image
├── package.json        # npm configuration file
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies**:
   You can use Yarn to install the required dependencies:
   ```
   yarn install
   ```

3. **Run the server**:
   Use the following command to start the server with nodemon:
   ```
   yarn start
   ```

   The server will be running on `http://localhost:8001`.

## Docker

To build and run the server using Docker, follow these steps:

1. **Build the Docker image**:
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.