require("dotenv/config");
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;

// Database
require("./database/db");

// Config JSON response
const app = express();

app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

// Routes
const UserRoutes = require("./routes/users.routes");
const PetRoutes = require("./routes/pets.routes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(SERVER_PORT);
