
// const verifySecret = (req, res, next) =>{
//     const secretKey = req.headers['SHIPPING_SECRET_KEY'];
//     if(!secretKey){
//         return res.status(403).json({message:'SHIPPING_SECRET_KEY is missing or invalid'})
//     }
//     if(secretKey!==process.env.SHIPPING_SECRET_KEY){
//         return res.status(403).json({message:'Failed to authenticate SHIPPING_SECRET_KEY'})
//     }
//     next()
// }

// module.exports=verifySecret;

const verifySecret = (req, res, next) => {
    const secretKey = req.header('SHIPPING_SECRET_KEY')
    if (!secretKey || secretKey !== process.env.SHIPPING_SECRET_KEY) {
      return res.status(403).json({ error: 'SHIPPING_SECRET_KEY is missing or invalid' });
    }
    next();
  };
  
  module.exports = verifySecret;