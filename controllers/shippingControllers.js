const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createShipping = async (req, res)=>{
    const {userId, productId, count} = req.body;
    if(userId==null||productId==null||count==null){
        res.status(404).json({message: "All fields are required"})
    };

    const shippingRecord= await prisma.shipping.create({
        data:{userId, productId, count}
    })
    res.status(200).json(shippingRecord)
}

const getShipping = async(req, res) => {
    try{
    const Records = await prisma.shipping.findMany()
    res.status(200).json(Records)
    }catch(error){
        res.status(500).json({error})
    }
}

// const cancelShipping= async(req,res)=>{

// }

module.exports={createShipping, getShipping}














// const { prisma } = require('../db/config');

// // Create a New Product
// const createProduct = async (req, res) => {
//   const { name, stock, price } = req.body;

//   if (!name || stock == null || price == null) {
//     return res.status(400).json({ error: 'All fields required' });
//   }

//   try {
//     const product = await prisma.product.create({
//       data: { name, stock, price },
//     });
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create product', details: err.message });
//   }
// };

// // Retrieve All Products
// const getAllProducts = async (req, res) => {
//   try {
//     const products = await prisma.product.findMany();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to retrieve products', details: err.message });
//   }
// };

// // Retrieve Product by ID
// const getProductById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to retrieve product', details: err.message });
//   }
// };

// // Update a Product (Full Update)
// const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const { name, stock, price } = req.body;

//   if (!name || stock == null || price == null) {
//     return res.status(400).json({ error: 'All fields required for update' });
//   }

//   try {
//     const updatedProduct = await prisma.product.update({
//       where: { id: parseInt(id) },
//       data: { name, stock, price },
//     });

//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update product', details: err.message });
//   }
// };

// // Partially Update a Product
// const partialUpdateProduct = async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   try {
//     const updatedProduct = await prisma.product.update({
//       where: { id: parseInt(id) },
//       data: updateData,
//     });

//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to partially update product', details: err.message });
//   }
// };

// // Delete a Product
// const deleteProduct = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await prisma.product.delete({ where: { id: parseInt(id) } });
//     res.status(200).json({ message: 'Product is deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete product', details: err.message });
//   }
// };

// module.exports = {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   partialUpdateProduct,
//   deleteProduct,
// };
