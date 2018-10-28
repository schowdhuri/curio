const Question = require("../models/Question");
const Option = require("../models/Option");
const HttpError = require("../helpers/HttpError");

const findAll = async () => {
    return await Question.find();
};

const findById = async (id) => {
    return await Question.findOne({ _id: id });
};

const create = async (data) => {
    if(!data.text)
        throw new HttpError(400, "text is required");
    if(!data.answer)
        throw new HttpError(400, "answer are required");
    const hideOptions = !Array.isArray(data.options);
    let options = [];
    let answer;
    if(!hideOptions) {
        options = data.options.map(opt => new Option({
            text: opt,
            type: "TEXT"
        }));
        answer = options.find(opt => opt.text == data.answer);
    } else {
        answer = new Option({
            text: answer,
            type: "text"
        });
    }
    const question = new Question({
        text: data.text,
        options,
        answer,
        hideOptions
    });
    return await question.save();
};

const update = async (id, data) => {
    if(!id)
        throw new HttpError(400, "id is required");
    if(!data)
        throw new HttpError(400, "No data provided");
    if(!data.text)
        throw new HttpError(400, "text is required");
    if(!data.answer)
        throw new HttpError(400, "answer is required");

    const hideOptions = !Array.isArray(data.options);
    let options = [];
    let answer;
    if(!hideOptions) {
        options = data.options.map(opt => new Option({
            text: opt,
            type: "TEXT"
        }));
        answer = options.find(opt => opt.text == data.answer);
    } else {
        answer = new Option({
            text: answer,
            type: "text"
        });
    }
    return await Question.update({
        _id: id
    }, {
        text: data.text,
        options,
        answer,
        hideOptions
    });
};

const remove = async (id, wetland, user) => {
    if(!id)
        throw new HttpError(400, "id is required");
    return await Question.findOneAndDelete({ _id: id });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
