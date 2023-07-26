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
	.catch(err => console.log(err))	
})

//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	axios.get(`http://localhost:8000/characters/${req.query.id}`)
	.then((character) => {
		const characters = [character.data]
		res.render('index',{characters})
	})
	.catch(err => console.log(err))
})

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', (req, res, next) => {
	axios.delete(`http://localhost:8000/characters/${req.body.id}`)
	.then((character) => {
		res.redirect('/')
	})
	.catch(err => console.log(err))
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', (req, res, next) => {
	const {name, occupation, weapon, cartoon} = req.body
	axios.post(`http://localhost:8000/characters/`, {name, occupation, weapon, cartoon})
	.then((character) => {
		res.redirect('/')
	})
	.catch(err => console.log(err))
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	const {name, occupation, weapon, cartoon} = req.body
	axios.put(`http://localhost:8000/characters/${req.body.id}`, {name, occupation, weapon, cartoon})
	.then((character) => {
		res.redirect('/')
	})
	.catch(err => console.log(err))
})

module.exports = router
