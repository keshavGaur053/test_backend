const express = require("express")
const router = express.Router();
const User = require("../Model/user")
router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ $or:[{Number: req.body.Number},{EmailId: req.body.EmailId}] });
        console.log(user + "-------------" + req.body.EmailId)
        if (user) {
            console.log(user)
            return res.status(200).send(true);
        }
        else {
            console.log(user)
            return res.status(200).send(false)
        }
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});
router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});

module.exports = router;