const express = require('express')

const { getNotes,postNote,delNote } = require('../controllers/notes')

const router = express.Router()

router.route('/').get(getNotes).post(postNote)
router.route('/:id').delete(delNote)

module.exports = router