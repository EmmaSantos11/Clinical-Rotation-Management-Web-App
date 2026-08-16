const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not set')
}
const MongoDB = mongoose.createConnection(MONGO_URI);

MongoDB.on('connected', () => {
    console.log('Connected to DashboardDB MongoDB');
});

MongoDB.on('error', (err) => {
    console.error('Error connecting to DashboardDB MongoDB:', err);
    process.exit(1);
});

module.exports=MongoDB
