const router = require("express").Router();
const Class = require("../models/Class");
const User = require("../models/User");
const { route } = require("./users");

// create a class
router.post("/", async (req, res) => {
    const newClass = new Class(req.body);
    try {
        const saveClass = await newClass.save();
        res.status(200).json(saveClass);
    } catch (err) {
        res.status(600).json(err);
    }
})

// delete a class
router.delete("/:id", async (req, res) => {
    //console.log("am intrat "+req.params.id);
    try {
        const editClass = await Class.findByIdAndDelete(req.params.id);
        if (editClass.userId === req.body.userId) {
            await editClass.deleteOne();
            res.status(200).json("Class Deleted!");
        } else {
            res.status(403).json("You can only delete your classes!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//edit a class
router.put("/:id", async (req, res) => {
    try {
        const editClass = await Class.findById(req.params.id);

        if (editClass.userId === req.body.userId) {
            await editClass.updateOne({ $set: req.body });
            res.status(200).json("Class Updated!");
        } else {
            res.status(403).json("You can only edit your classes!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//Join a class
router.put("/:id/join", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentClass = await Class.findById(req.body.classId);
        if (!user.classes.includes(req.body.classId)) {
            await user.updateOne({ $push: { classes: req.body.classId } })
            res.status(200).json("you joined the class!");
        } else {
            res.status(403).json("you already joined this class!");
        }
    } catch (err) {
        res.status(500).json(err);
    }

})

//leave a class
router.put("/:id/leave", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentClass = await Class.findById(req.body.classId);
        if (user.classes.includes(req.body.classId)) {
            await user.updateOne({ $pull: { classes: req.body.classId } })
            res.status(200).json("you left the class!");
        } else {
            res.status(403).json("you are not in this class!");
        }
    } catch (err) {
        res.status(500).json(err);
    }

})

// get a class
router.get("/:id", async (req, res) => {
    try {
        const getClass = await Class.findById(req.params.id);
        res.status(200).json(getClass);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get user classes
router.get("/user/all/:userId", async (req, res) => {
    try {
        const curretUser = await User.findById(req.params.userId);
        const userClasses = await Class.find({ userId: curretUser._id });

        const classesFollowed = await Promise.all(
            curretUser.classes.map((classId) => {
                return Class.findById(classId);
            })
        );

        res.status(200).json(userClasses.concat(...classesFollowed));

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;