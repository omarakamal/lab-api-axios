const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//ITERATION 3
//GET route for searching for all characters
function getAllCharacters(req, res) {
  axios
    .get("http://localhost:8000/characters")
    .then((result) => {
      console.log(result.data);
      res.render("index", { character: result.data });
    })
    .catch((err) => {
      res.render("index", { character: result.data });
    });
}
router.get("/all", (req, res, next) => {
  getAllCharacters(req, res);
});

//ITERATION 4
//GET route for searching for 1 character
router.get("/search", (req, res, next) => {
  const { id } = req.query;
  axios
    .get(`http://localhost:8000/characters/${id}`)
    .then((result) => {
      res.render("index", {
        characterDetail: result.data,
        successMessage: result.data.id ? "ID found" : "",
      });
    })
    .catch((err) => {
      res.render("index", { errorMessage: "ID not found" });
    });
});

//ITERATION 5
//POST route for deleting 1 character
router.post("/search", (req, res, next) => {
  axios
    .delete(`http://localhost:8000/characters/${req.body.id}`)
    .then(() => {
      getAllCharacters(req, res);
    })

    .catch((err) => {
      res.render("index", { errorMessage: "ID not found" });
    });
});

//ITERATION 6
//POST route for creating a new character
router.post("/search/new-character", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, weapon, cartoon } = req.body;
  axios
    .post("http://localhost:8000/characters/", {
      name,
      occupation,
      weapon,
      cartoon,
    })
    .then(() => {
      getAllCharacters(req, res);
    });
});

//ITERATION 7
//POST route for editing 1 character
router.post("/search/edit", (req, res, next) => {
  console.log(req.body);
  axios
    .put(`http://localhost:8000/characters/${req.body.id}`, req.body)
    .then(() => {
      getAllCharacters(req, res);
    })
	.catch((err) => {
		res.render("index", { errorMessage: "ID not found" });
	  });
});

module.exports = router;
