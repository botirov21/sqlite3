const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

//Blog post
const app =express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

//router initialize
app.use("/posts", require("./routes/post.route"))

//Server running
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});