import dotenv from 'dotenv';
import mongoose from 'mongoose';
import prob from '/models/prob';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(
    (response) => {
        console.log("Success conntected to mongo");
    }
).catch(e => {
    console.error(e);
});

const create = async (ctx) => {
    const {
        title,
        context,
        score,
        author,
        flag
    } = ctx.request.body;

    const prob = new prob({
        title,
        contet,
        score,
        author,
        flag
    });

    try {
        await prob.save();
    } catch (e) {
        return ctx.throw(400, "Failed");
    }
};

const list = async (ctx) => {
    
}