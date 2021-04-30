const mongoose = require('mongoose');

const articleSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, 

    date: {
        type: String
    },
    description: {
        type: String,
        required: true,
    }, 

    photo: {
        type: String
    },
});

const Article= mongoose.model("articleData",articleSchema);
module.exports=Article;