const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true,
    },
    classCode: {
        type: String,
        required: true,
    },
    classPicture: {
        type: String,
        default: ""
    }

},
    { timestamps: true }
);


module.exports = mongoose.model("Class", ClassSchema);