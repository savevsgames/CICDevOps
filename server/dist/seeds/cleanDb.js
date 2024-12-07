import models from "../models/index.js";
import db from "../config/connection.js";
export default async (modelName, collectionName) => {
    try {
        let modelTest = models[modelName].db.db;
        if (!modelTest) {
            throw new Error("Model not found");
        }
        let modelExists = await modelTest
            .listCollections({
            name: collectionName,
        })
            .toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
