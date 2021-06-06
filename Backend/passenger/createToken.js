const jwt = require('jsonwebtoken')
let generateToken = (user)=>{
    console.log("create token"+user)
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email
    },'test123',
    {
        expiresIn:'30d'
    })
    console.log(jwt);
};
module.exports = generateToken;
