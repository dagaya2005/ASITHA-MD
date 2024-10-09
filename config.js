const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=GngxQb6b#xLAZabA3cEkC0BVfmAsgzLzfWDAAVN73DHjwVQZpEBc",
MONGODB: process.env.MONGODB || "mongodb+srv://supnu:shan27@cluster0.dw38v.mongodb.net/",//enter mongo db url
};
