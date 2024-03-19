# Frontend (UI) for Preqin Take Home Exercise

This is the UI app developed for the take home exercise.

The project is built using the following technologies:
- React
- TypeScript
- Vite
- TailwindCSS

## Instructions

To run it using Docker:
1. Make sure Docker is installed on your machine.
2. Navigate to the project directory.
3. Build the UI container with `docker build --build-arg VITE_API_BASE_URL='http://localhost:8000' -t preqin-ui .`
    - Update the value for `VITE_API_BASE_URL` to match your API URL.
4. Run the API container with `docker run -d -p 3000:3000 preqin-ui`.
5. Access the application at `localhost:3000` or `127.0.0.1:3000`.

To run it for local development:
1. Navigate to the project directory.
2. Install dependencies.
    `npm install`
3. Set up the API Base URL in environment variables. Go to the `.env` in the root directory.
    - Update the value for `VITE_API_BASE_URL` to match with your API URL.
4. Run the development server.
    `npm run dev`
5. Access your app in a web browser.
    Go to `http://localhost:3000`
    - You can update the port number, in `vite.config.ts` file.

To run tests:
  `npm test`


## Further Improvements

1. Increase Test Coverage.
2. Robust Error Handling using Error Boundary and other mechanisms.
3. Global interceptor to handle API requests with provision add headers (e.g. Authorization etc)
4. Strict Type Checks.
5. Code Splitting & Lazy Loading.
6. And many more...
