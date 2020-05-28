const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

app.use(express.json())


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://user:password1@ds127944.mlab.com:27944/heroku_mkjllzxl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
require('./models/user');
require("./models/post");
app.use(require("./routes/auth"))
app.use(require("./routes/post"))

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})