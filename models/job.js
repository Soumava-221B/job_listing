const mongoose = require("mongose");

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
})