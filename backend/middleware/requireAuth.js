const jwt = require('jsonwebtoken')
const User = require("../models/userModel")

const requireAuth = async (req,res,next) => {
    // verfiy Authentication 
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error:"Authorization token required"})
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({_id}).select('_id'); 
    //  .select('_id) will return us only that key value pair , 
    // rather than all values associated with that documnet
    next() ;
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Request is not Authorized"});
    }
}

module.exports = requireAuth;