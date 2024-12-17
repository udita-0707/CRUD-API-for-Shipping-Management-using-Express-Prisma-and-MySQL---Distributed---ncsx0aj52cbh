const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createShipping = async (req, res) => {
  const { userId, productId, count } = req.body;
  if (!userId || !productId || !count) {
    return res.status(404).json({ error: 'All fields required' });
  }
  const shippingRecord = await prisma.shipping.create({
    data: { userId, productId, count},
  });
  res.status(201).json(shippingRecord);
};

const cancelShipping = async (req, res) => {
  const { shippingId } = req.body;
  if (!shippingId) {
    return res.status(404).json({ error: 'Missing shippingId' });
  }
  const shippingRecord = await prisma.shipping.update({
    where: { id: shippingId },
    data: { status: 'cancelled' },
  });
  res.json(shippingRecord);
};

const getShipping = async (req, res) => {
  const userId = req.query.userId;
  if (userId) {
    const shippingRecords = await prisma.shipping.findMany({
      where: { userId: parseInt(userId) },
    });
    res.json(shippingRecords);
  } else {
    const shippingRecords = await prisma.shipping.findMany();
    res.json(shippingRecords);
  }
};

module.exports = { createShipping, cancelShipping, getShipping };
