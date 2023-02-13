
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog = require('./models/post');
const app = express();
app.use(bodyParser.json());

const db = "mongodb://localhost:27017/application";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully connected to the database");
    }
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/AddBlog', (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });

    blog.save((error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            console.log("blog saved")
            res.send(blog);
        }
    });
});

app.get('/api/getBlogs', (req, res) => {
    Blog.find({}, (error, blogs) => {
        if (error) {
            console.log("error get all blogs ", error)
            res.status(500).send(error);
        } else {
            console.log('success')
            res.send(blogs);
        }
    });
});


app.get('/api/getBlogById/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id, (error, blog) => {
        if (error) {
            console.log("error getting blog by id ", error);
            res.status(500).send(error);
        } else if (!blog) {
            console.log("blog not found");
            res.status(404).send("blog not found");
        } else {
            console.log("blog by id return success");
            res.send(blog);
        }
    });
});
app.patch('/api/incrementLikes/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true }, (error, blog) => {
        if (error) {
            console.log("error incrementing likes", error);
            res.status(500).send(error);
        } else {
            console.log("success incrementing likes");
            res.send(blog);
        }
    });
});

app.patch('/api/incrementDislikes/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, { $inc: { dislikes: 1 } }, { new: true }, (error, blog) => {
        if (error) {
            console.log("error updating blog", error);
            res.status(500).send(error);
        } else {
            console.log("success updating blog");
            res.send(blog);
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});