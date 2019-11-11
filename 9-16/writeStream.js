/**
 * source.pipe(destination)
 */
const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/stream.txt");
var wirtePath = path.join(__dirname,"/write.txt");
var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(wirtePath);
readStream.pipe(writeStream);
