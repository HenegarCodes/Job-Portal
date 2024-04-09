const express = require('express');
const router = express.Router();
const User = require("../models/user"); // Import the User model

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Add all data" });
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with that email" });
            }
            const user = new User({
                email,
                password,
                name,
            });
            user.save()
                .then((user) => {
                    res.json({ message: "Saved Successfully" });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ error: "Internal server error" });
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
});

module.exports = router;
