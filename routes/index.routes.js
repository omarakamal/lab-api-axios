const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 2
//GET route for searching for 1 character
router.get('/all', (req, res, next) => {
	axios.get('http://localhost:8000/characters')
	.then((characters) => {
		res.render('index',{characters:characters.data})
	})	
})

//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	console.log(req.params)
	axios.get(`http://localhost:8000/characters/:id`)
	.then((character) => {
		res.render('index',{character:character.data})
	})
})

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', (req, res, next) => {
	//Write code here
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', (req, res, next) => {
	//Write code here
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	//Write code here
})

module.exports = router
