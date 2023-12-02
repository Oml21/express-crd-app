const Post = require("./../models/postModel.js");
const path = require("path");

const createPath = (page) => path.join(__dirname, "..", "views", `${page}.ejs`);

exports.getIndex = (req, res) => {
    res.render(createPath("index"), { title: "Home" });
}

exports.getAddPost = (req, res) => {
    res.render(createPath("add-post"), { title: "Add Post" });
}

exports.postAddPost = (req, res) => {
    let { title, author } = req.body;
    let post = new Post({ title, author });
    post
      .save()
      .then(() => res.redirect("/posts"))
      .catch((error) => console.log("Saving Error!"));
}

exports.getPosts = (req, res) => {
    Post.find()
      .then((posts) => res.render(createPath("posts"), { posts: posts, title: "Posts" }))
      .catch((error) => console.log(`Finding error! ${error}`));
}

exports.deletePost = (req, res) => {
    let postId = req.params.id;
    Post.findByIdAndDelete(postId)
      .then(() => res.redirect("/posts"))
      .catch((error) => console.log(`Deleting error! ${error}`));
}

