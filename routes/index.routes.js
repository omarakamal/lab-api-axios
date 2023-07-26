const express = require('express')
const router = express.Router()
const axios = require('axios')
const ApiService = require('../services/api.service')
const apiService = new ApiService();

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 3
//GET route for searching for 1 character
router.get('/all', async (req, res, next) => {
	try{
		const result = await apiService.getAllCharacters();
		const characters = result.data
		res.render('index', {characters});
	}catch(error){
		console.error(error);
		res.render('index')
	}
})

//ITERATION 4
//GET route for searching for 1 character
router.get('/search', async (req, res, next) => {
	const {id} = req.query

	if(!id){
	 res
		.status(500)
		.render('index', {errorMessage: "No Id provided for character search"})
		return
	}
	console.log('character id ', id);

	try{
		const result = await apiService.getOneCharacter(id);
		const character = result.data
		console.log('character ', character);
		res.render('index', character)
		return;
	}catch(error){
		console.error(error)
	}
})

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', async (req, res, next) => {
	const {id} = req.body;

	if(!id){
		res
		.status(500)
		.render('index', {errorMessage: 'No id provided for delete action.'});
		return
	}

	try{
		const result = await apiService.deleteCharacter(id);
		res.redirect('/')
	}catch(error){
		console.error(error)
	}
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', async (req, res, next) => {
	const data = req.body
	const cartoon = req.body.cartoon

	// resetting the cartoon to boolean 
	data['cartoon'] =  cartoon === 'on' ? true : false;
	console.log('data ', data);

	try{
		const newCharacter = await apiService.createCharacter(data)
		res.redirect('/')

	}catch(error){
		console.error(error);
	}
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	//Write code here
	const {id, name, weapon, cartoon, occupation} = req.body
	const cartoonCast = cartoon === 'on'? true : false

	if(!id){
		if(!characterId){
			res
			 .status(500)
			 .render('index', {errorMessage: "No Id provided for character update"})
		 }
	}

	try{
		const updatedCharacter = apiService.editCharacter(id, {name, weapon, cartoon: cartoonCast, occupation});
		res.redirect('/')
	}
	catch(error){
		console.error(error)
	}
})

module.exports = router
