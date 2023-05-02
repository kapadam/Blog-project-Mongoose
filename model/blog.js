const mongoose = require("mongoose");

const bollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    releaseDate: String
});

const Bollywood = mongoose.model("bollywoods", bollywoodSchema)

const fitnessSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String
});

const Fitness = mongoose.model("fitness", fitnessSchema)

const foodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String
});

const Food = mongoose.model("food", foodSchema)

const hollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    directedBy: String
});

const Hollywood = mongoose.model("hollywood", hollywoodSchema)

const technologySchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    developer: String
});

const Technology = mongoose.model("technology", technologySchema)

const userInfoSchema = new mongoose.Schema({
    img: String,
    name: String,
    created: String,
    time: String,
    shareIcons: Boolean
});

const UserInfo = mongoose.model("user_info", userInfoSchema)

module.exports = {Bollywood, Fitness, Food, Hollywood, Technology, UserInfo};