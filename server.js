const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/workout",
    {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// routes
app.use(require("./routes/workouts.js"));
app.use(require("./routes/index.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
