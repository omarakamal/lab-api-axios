const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//ITERATION 3

//GET route for searching all
router.get("/all", async (req, res, next) => {
  try {
    const response = await axios.get("http://localhost:8000/characters");
    const characters = response.data;
    res.render("index", { characters });
  } catch (error) {
    next(error);
  }
});




//ITERATION 4
//GET route for searching 1 Character
router.get("/search", async (req, res, next) => {
  const id = req.query.id;

  try {
    const response = await axios.get(`http://localhost:8000/characters/${id}`);
    const character = response.data;
    res.render("index", { character });
  } catch (error) {
    next(error);
  }
});

// //ITERATION 5
// //POST route for deleting 1 character
router.post("/search/delete", (req, res, next) => {
  const id = req.body.id;
  axios
    .delete(`http://localhost:8000/characters/${id}`)
    .then((result) => res.redirect("/"))
    .catch((error) => {
      console.error("Error deleting character by ID:", error.message);
    });

  //Write code here
});

// //ITERATION 6
// //POST route for creating a new character
router.post("/search/new-character", async (req, res, next) => {
  try {
    const { name, occupation, weapon, cartoon } = req.body;
    const newCharacter = { name, occupation, weapon, cartoon };
    await axios.post("http://localhost:8000/characters", newCharacter);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

// //ITERATION 7
// //POST route for editing 1 character
router.post("/search/edit", (req, res, next) => {
  const id = req.body.id;
  const updatedCharacterData = req.body;
  axios
    .put(`http://localhost:8000/characters/${id}`, updatedCharacterData)
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.error("Error editing character by ID:", error.message);
    });
});
//Write code here

module.exports = router;
