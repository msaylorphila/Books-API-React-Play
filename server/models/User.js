const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// import schema from Book.js
const bookSchema = require('./Book');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        //set savedBooks to be an array of data that adheres to the bookSchema
        savedBooks: [bookSchema],
    },

    {
        toJSON: {
            virtuals: true,
        }
    }
);

//hash user password

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);

    }

    next();
});

//compare and validate password

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

// when a user is queried creates a new field called bookCount that contains the number of saved books

userSchema.virtual('bookCount').get(function () {
    return this.savedBooks.length;
});

const User = model('User', userSchema);

module.exports = User