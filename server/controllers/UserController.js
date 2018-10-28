const User = require("../models/User");

const dateFormat = require("../../common/utils/dateFormat");

const findAll = async () => {
    return await User.find();
};

const findById = async (id) => {
    const user = await User.findOne({ _id: id });
    if(!user)
        return null;
    return user;
};

const findOrCreate = async (authId, email, name) => {
    if(!authId)
        throw new Error("authId is required");

    let user = await User.findOne({
        authid: authId
    });
    if(!user) {
        if(!email)
            throw new Error("email is required");
        const obj = new User({
            authid: authId,
            username: email,
            email,
            name: name || email
        });
        user = await obj.save();
    }
    return user;
};

module.exports = {
    findAll,
    findById,
    findOrCreate
};
