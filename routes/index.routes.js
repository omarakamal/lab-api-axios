const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//ITERATION 3
//GET route for searching for 1 character
router.get("/all", (req, res, next) => {
  axios
    .get("http://localhost:8000/characters")
    .then((result) => {
      res.render("index", { characters: result.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 4
//GET route for searching for 1 character
router.get("/search", (req, res, next) => {
  const { id } = req.query;
  axios
    .get("http://localhost:8000/characters/" + id)
    .then((result) => {
      console.log(result);
      res.render("index", { character: result.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 5
//POST route for deleting 1 character
router.post("/search/delete", (req, res, next) => {
  const { id } = req.body;
  axios
    .delete("http://localhost:8000/characters/" + id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 6
//POST route for creating a new character
router.post("/search/new-character", (req, res, next) => {
  const { name, occupation, weapon, cartoon } = req.body;
  axios
    .post("http://localhost:8000/characters", {
      name,
      occupation,
      weapon,
      cartoon,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//ITERATION 7
//POST route for editing 1 character
router.post("/search/edit", (req, res, next) => {
  const { id, name, occupation, weapon, cartoon } = req.body;
  axios
    .put("http://localhost:8000/characters/" + id, {
      name,
      occupation,
      weapon,
      cartoon,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
