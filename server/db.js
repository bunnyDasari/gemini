const mongoose = require("mongoose");
const dbConnect = mongoose.connect("mongodb+srv://rohandb:rohandb123@testdata.kdgizeo.mongodb.net/")
dbConnect.then(() => {
    console.log("db connected")
}).catch((err) => {
    console.log("error at db connection", err)
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const user = mongoose.model("user", userSchema)

module.exports = user