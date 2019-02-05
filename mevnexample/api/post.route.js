import express from "express";
import Post from "./post.model";

const router = express.Router();

router.post("/add", (req, res) => {
  const post = new Post(req.body);
  post
    .save()
    .then(() => {
      res.status(201).json({
        business: "business in added successfully"
      });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

router.get("/", (req, res) => {
  Post.find((err, posts) => {
    err ? res.json(err) : res.json(posts);
  });
});

router.get("/edit/:id", (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    err ? res.json(err) : res.json(post);
  });
});

router.put("/update/:id", (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).send("Data not found");
    } else {
      post.title = req.body.title;
      post.body = req.body.body;
      post
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(() => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  Post.findOneAndRemove(req.params.id, (err, post) => {
    if (!post) {
      res.status(400).send("Data not found");
    }
    err ? res.json(err) : res.status(200).send("Data has been deleted");
  });
});

export default router;
