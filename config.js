const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=CzoEEA7D#dQXJ9pDrnpBA4_3Yz24FvV3cvaJnGF2Qy7oLH5X8sdE",
MONGODB: process.env.MONGODB || "mongodb+srv://supnu:shan27@cluster0.dw38v.mongodb.net/",//enter mongo db url
};
