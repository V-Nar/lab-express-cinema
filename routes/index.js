const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')


const Movie = require('../models/Movie.model')



/* GET /

This is a health check. It allows us to see that the API is running.
*/

router.get('/', (req, res) =>
res.json({ success: true, name: 'lab-express-cinema' })
)

router.get('/movies', async (req, res) => {
  const movies = req.body
  const allMovies = await Movie.find(movies).select( 'title director' )
  res.json({ allMovies })
})

router.get('/movie/:id', async (req, res) => {
  const {id} = req.params
  const movieById = await Movie.findById(id)
  res.json({ movieById })
})

module.exports = router
