const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const userSchema =  {

username: String,
password: String,
salary: Decimal128 ,
rent: Decimal128,
food: [{}],
travel: [{}],
extra: [{}]
};

const User = mongoose.model('users', userSchema)

module.exports = User;