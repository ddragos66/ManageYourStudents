const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body, })
            res.status(200).json("Acount has been updated")
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you can only update your account");
    }
})

//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findByIdAndDelete({ _id: req.params.id })
            res.status(200).json("Acount has been deleted")
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you can only delete your account");
    }
})

//find a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;