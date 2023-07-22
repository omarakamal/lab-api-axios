const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 1
//GET route for searching for 1 character
router.get('/search', (req, res) => {
	//Write code here
})

//ITERATION 2
//POST route for deleting 1 character
router.post('/search/delete', (req, res) => {
  //Write code here
})

//ITERATION 3
//POST route for creating a new character
router.post('/search/new-character', (req, res) => {
  //Write code here
})

//ITERATION 4
//POST route for editing 1 character
router.post('/search/edit', (req, res) => {
  //Write code here
})

module.exports = router
