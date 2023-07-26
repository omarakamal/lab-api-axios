const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 3
//GET route for searching for 1 character
router.get('/all', (req, res, next) => {
	//Write code here
	axios.get('http://localhost:8000/characters')
	.then((result)=>{
		res.render('index',{allCharacters:result.data})
	})
	.catch((err)=>console.log(err))
})

//ITERATION 4
//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	//Write code here
	const {id} = req.query

	if (id === '') {
        res.render('index', {
          errorMessage: 'Please enter id.'
        });
        return;
      } else {
		res.render('index', {
			errorMessage: 'Successfull Search.'
		  })
	  }

	axios.get(`http://localhost:8000/characters/${id}`)
	.then((result)=>{
		res.render('index',{oneCharacter:result.data})
	})
	.catch((err)=>console.log(err))
})

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', (req, res, next) => {
	//Write code here
	const characterId = req.body.id

	if (characterId === '') {
        res.render('index', {
          errorMessage: 'Please enter id.'
        });
        return;
      } else {
		res.render('index', {
			errorMessage: 'Successfull, character deleted.'
		  })
	  }

	axios.delete(`http://localhost:8000/characters/${characterId}`)
	.then(()=>{
		res.redirect('/')})
	.catch((err)=>console.log(err))
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', (req, res, next) => {
	//Write code here
	const {name,occupation,weapon,cartoon} = req.body

	if (name === '' || occupation === '' || weapon === '' || cartoon === '') {
        res.render('index', {
          errorMessage: 'Please enter name, occupation, weapon and cartoon.'
        });
        return;
      } else {
		res.render('index', {
			errorMessage: 'Successfull, character created.'
		  })
	  }

	axios.post(`http://localhost:8000/characters/`, {name, occupation, cartoon, weapon})
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	//Write code here
	if (req.body.id === '') {
        res.render('index', {
          errorMessage: 'Please enter id.'
        });
        return;
      } else {
		res.render('index', {
			errorMessage: 'Successfull, character edited.'
		  })
	  }

	axios
    .put(`http://localhost:8000/characters/${req.body.id}`, req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router
