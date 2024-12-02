const { Prisma } = require('@prisma/client');
const express = require('express');
const createShipping = async (req, res)=>{
    const {userID, productID, count} = req.body;

    if(!userID||!productID||!count){
        res.status(404).json({message: "All fields are required"})
    };

    const shippingRecord= await Prisma.shipping.create({
        data:{userID, productID, count}
    })
    res.status(200).json(shippingRecord)
}

const getShipping = async(req, res) => {
    const Records = await prisma.shipping.findMany()
    res.status(200).json(Records)
}

module.exports(createShipping, getShipping)