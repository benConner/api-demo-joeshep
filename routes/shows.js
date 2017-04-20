'use strict';

const { Router } = require('express');
const router = Router();

const {
  getShows,
  getShow,
  getShowFaves,
  addShow,
  deleteShow,
  getShowDirectors,
  getDirectors,
  getSingleDirectors } = require('../controllers/showCtrl');

router.get('/shows', getShows);
router.post('/shows/new', addShow)
router.get('/shows/favorites', getShowFaves);
router.get('/shows/directors', getShowDirectors);
router.get('/directors', getDirectors);
router.get('/directors/shows', getSingleDirectors);
router.get('/shows/:id', getShow);
router.delete('/shows/:id', deleteShow);


module.exports = router;
