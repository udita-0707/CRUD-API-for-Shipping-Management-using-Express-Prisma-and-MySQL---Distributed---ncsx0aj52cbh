const API_AUTH_KEY="a1b2c3d4e5f67890123456789abcdef"

const verifySecret = (req, res, next) =>{
    const apiauthkey = req.headers['apiauthkey'];
    if(!apiauthkey){
        return res.status(403).json({message:'SHIPPING_SECRET_KEY is missing or invalid'})
    }
    if(apiauthkey!==API_AUTH_KEY){
        return res.status(403).json({message:'Failed to authenticate SHIPPING_SECRET_KEY'})
    }
    next()
}

module.exports=verifySecret;