const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema;

const UserSchema = new schema({
    firstName:{
        type: String,
        lowercase: true,
        trim: true, //delete space
        require: true,
    },
    lastName:{
        type: String,
        lowercase: true,
        trim: true, //delete space
        require: true,
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true, //delete space
        require: true,
    },
    password:{
        type: String,
        min: 8,
        max: 256,
        trim: true, //delete space
        require: true,
    },
    creationDate:{
        type: Date,
        default: () => new Date(),
    },
    role:{
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer',
    },
});

UserSchema.pre('save', function (next) {
    const client = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(client.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            client.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema);