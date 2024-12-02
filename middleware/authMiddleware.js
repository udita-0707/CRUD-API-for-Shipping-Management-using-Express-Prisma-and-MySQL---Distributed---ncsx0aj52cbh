const API_AUTH_KEY=process.env.SHIPPING_SECRET_KEY
const authMiddleware = (req, res, next) =>{
    const apiauthkey = req.headers['SHIPPING_SECRET_KEY'];
    if(!apiauthkey){
        res.status(403).json({message:'SHIPPING_SECRET_KEY is missing or invalid'})
    }
    if(apiauthkey!==API_AUTH_KEY){
        res.status(403).json({message:'Failed to authenticate SHIPPING_SECRET_KEY'})
    }
    next()
}
module.exports(authMiddleware);