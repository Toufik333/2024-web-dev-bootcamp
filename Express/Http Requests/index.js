import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => { //This is the home route get request is used to get data from the server and res is used to send data to the server
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => { //Post request is used to send data to the server
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => { //Put request is used to update data on the server
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => { //Patch request is used to update data on the server
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {  // This is used to start the server on the port 3000 listen is used to listen to the port and the callback function is used to print the message on the console
  console.log(`Server started on port ${port}`);
});
