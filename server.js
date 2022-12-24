const express = require("express");
const ConnectionDB = require("./config/db");
const router = require("./routes/userRoute");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

ConnectionDB(); // <= database connection function define

app.use("/user", router); // <= user authentication routes

app.get("/", (req, res) => {
    res.send("Express world");
});

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runing on ${PORT}`);
});