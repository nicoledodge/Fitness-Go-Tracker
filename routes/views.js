const router = require("express").Router();

const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// router.get for statistics maybe?

module.exports = router;