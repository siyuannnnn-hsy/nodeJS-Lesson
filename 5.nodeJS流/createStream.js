const stream = require("stream");

var reader = new stream.Readable();
reader.push("abcdefghijklmnopqrstuvwxyz");
reader.push(null);
reader.pipe(process.stdout);