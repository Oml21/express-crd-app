const postController = require('./controllers/postController.js');
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", postController.getIndex);
app.get("/add-post", postController.getAddPost);
app.post("/add-post", postController.postAddPost);
app.get("/posts", postController.getPosts);
app.post("/delete-post/:id", postController.deletePost);

app.listen(PORT, () => {
    console.log(`Server has been started on PORT ${PORT}...`);
});
