const User = require('./models/UserModel');

exports.createOne = async (data) => {

    const {firstName, lastName, email, password, phone, role} = data;
    const user = new User({
        firstName,
        lastName,
        email,
        password,
        phone,
        role,
    });

    const userCreated = await user.saved();
    if(!userCreated){
        throw new Error('Error during creation');
    }
    return userCreated;
}