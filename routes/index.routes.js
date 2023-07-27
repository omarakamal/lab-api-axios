const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

router.get('/characters', (req, res) => {
	axios.get('http://localhost:8000/characters')
	.then(result =>{
		// console.log(result.data)
		res.render('characters',result.data)
	})
	.catch(err=>{
		console.log(err)
	})
	
})
router.get('/all',(req,res) => {
	axios.get('http://localhost:8000/characters')
	.then(result =>{
		console.log(result.data)
		res.render('all.hbs',{characters:result.data})
	})
	.catch(err=>{
		console.log(err)
	})
	
})
router.get('/characters/:id',(req,res) =>{
	const {id} = req.params
	axios.get(`http://localhost:8000/characters/${id}`)
	.then(result =>{
		res.render('search',{characters:result.data})
	})
	.catch(err=>{
		console.log(err)
	})
})

router.post('/search/new-character',(req,res)=>{
	console.log(req.body)
	const {name,occupation,weapon} = req.body
	axios.post('http://localhost:8000/characters',{name,occupation,weapon})
	.then(()=>{
		res.redirect('/all')
	})
	.catch(err=>{
		console.log(err)
	})
})
router.post('/search/:id/delete',(req,res)=>{
	
	axios.delete(`http://localhost:8000/characters/${req.params.id}`)
	.then(()=>{
		res.redirect('/all')
	})
	.catch(err=>{
		console.log(err)
	})
})
router.get('/search/:id/edit',(req,res)=>{
	axios.get(`http://localhost:8000/characters/${req.params.id}`)
	.then((result)=>{
		res.render('edit-char',{characters:result.data})
	})
})
router.post('/search/:id/edit',(req,res)=>{
	axios.put(`http://localhost:8000/characters/${req.params.id}`,req.body)
	.then((result)=>{
		res.redirect('/all')
	})
})



//ITERATION 3
//GET route for searching for 1 character
router.get('/all', (req, res, next) => {
	//Write code here	
})

//ITERATION 4
//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	//Write code here
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
