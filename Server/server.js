const mongoose = require('mongoose');
const dotenv = require('dotenv');
// For vercel
const serverless = require('serverless-http');

dotenv.config({ path: './config.env' });

const app = require('./app');

// DB connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Successfully connected to MongoDB'))
  .catch((err) => {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  });

// Start server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}...`);
// });

// For vercel
module.exports = serverless(app);
