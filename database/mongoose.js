const mongoose = require("mongoose");

const url = "mongodb+srv://Kapadamdharani:DsD9NLIRURSnifoh@cluster0.htmhqbs.mongodb.net/Blog_Website";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("dbconn =>", dbConn)
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;