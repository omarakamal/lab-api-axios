const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 3
//GET route for searching all characters
router.get('/all', (req, res, next) => {
	axios.get('http://localhost:8000/characters')
	.then((characters) => {
		res.render('index',{characters:characters.data})
	})
	.catch(err => console.log(err))	
})

//ITERATION 4
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
	if (!name || typeof name !== 'string' ||
  	!occupation || typeof occupation !== 'string' ||
  	!weapon || typeof weapon !== 'string') {
		return res.json({ error: 'Invalid or missing fields in the request body' });
	}
	else {
		const character = {name, occupation, cartoon, weapon}
		axios.post(`http://localhost:8000/characters/`, character)
		.then((response) => {
			res.redirect('/')
		})
		.catch(err => console.log(err))
	}
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	const {name, occupation, weapon, cartoon} = req.body
	if (!name || typeof name !== 'string' ||
  	!occupation || typeof occupation !== 'string' ||
  	!weapon || typeof weapon !== 'string') {
		return res.json({ error: 'Invalid or missing fields in the request body' });
	}
	else {
		const character = {name, occupation, cartoon, weapon}
		axios.put(`http://localhost:8000/characters/${req.body.id}`, character)
		.then((response) => {
			res.redirect('/')
		})
		.catch(err => console.log(err))
	}
})

module.exports = router
