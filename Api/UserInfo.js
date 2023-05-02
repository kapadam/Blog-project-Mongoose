// const mongoClient = require("../database/connection");
// const collectionName = "UserInfo"; 
const {UserInfo} = require("../model/blog"); 

const userInfoDataInsertToDb = async(req, res) => {
    const userData = req.body;
    // try {
    //     const result = await mongoClient.insertToDB(userData, collectionName);
    //     console.log("The result of databse operation =>", result);
    //     return res.status(200).send(result);
    // } catch(error) {
    //     console.log("Something went wrong while performing db opeartion");
    //     return res.status(500).send({message: "Something went wrong while performing the operation"})
    // }

    try {

        const userInfo = new UserInfo({
            img: userData.img,
            name: userData.name,
            created: userData.created,
            time: userData.time,
            shareIcons: userData.shareIcons
        })
    
        const dbResponse = await userInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Data is saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const userInfoDataFindFromDb = async(req, res) => {
    // try {
    //     const result = await mongoClient.findFromDB(collectionName);
    //     console.log("The result of databse operation =>", result);
    //     return res.status(200).send(result);
    // } catch(error) {
    //     console.log("Something went wrong while performing db opeartion");
    //     return res.status(500).send({message: "Something went wrong while performing the operation"})
    // }

    try {
        const dbResponse = await UserInfo.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { userInfoDataInsertToDb, userInfoDataFindFromDb } 