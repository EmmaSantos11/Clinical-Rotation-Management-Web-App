const mongoose = require("mongoose")
const dns = require("dns")
// Works around a known Node/Windows issue where the mongodb+srv:// DNS SRV
// lookup fails (ECONNREFUSED) even though the OS resolver finds it fine.
dns.setServers(["8.8.8.8", "1.1.1.1"])
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
