const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Fresh Organic Bananas',
    description: 'Sweet and ripe organic bananas, perfect for snacking or baking.',
    price: 2.99,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80',
    stock: 100,
    unit: 'bunch'
  },
  {
    name: 'Red Apples',
    description: 'Crisp and sweet red apples, locally sourced.',
    price: 3.49,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&q=80',
    stock: 150,
    unit: 'lb'
  },
  {
    name: 'Fresh Carrots',
    description: 'Organic carrots, perfect for salads and cooking.',
    price: 1.99,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80',
    stock: 200,
    unit: 'lb'
  },
  {
    name: 'Organic Spinach',
    description: 'Fresh organic spinach leaves, rich in nutrients.',
    price: 4.99,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80',
    stock: 80,
    unit: 'bunch'
  },
  {
    name: 'Whole Milk',
    description: 'Fresh whole milk from local dairy farms.',
    price: 3.99,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
    stock: 50,
    unit: 'gallon'
  },
  {
    name: 'Greek Yogurt',
    description: 'Creamy Greek yogurt, high in protein.',
    price: 4.99,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    stock: 60,
    unit: 'container'
  },
  {
    name: 'Fresh Bread',
    description: 'Freshly baked artisan bread.',
    price: 3.99,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    stock: 30,
    unit: 'loaf'
  },
  {
    name: 'Chocolate Croissants',
    description: 'Buttery croissants filled with rich chocolate.',
    price: 2.99,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80',
    stock: 40,
    unit: 'piece'
  },
  {
    name: 'Bell Peppers',
    description: 'Colorful bell peppers, perfect for salads and cooking.',
    price: 1.49,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&q=80',
    stock: 120,
    unit: 'piece'
  },
  {
    name: 'Orange Juice',
    description: 'Fresh-squeezed orange juice, no added sugars.',
    price: 5.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80',
    stock: 45,
    unit: 'gallon'
  }
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`Successfully seeded ${createdProducts.length} products`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
