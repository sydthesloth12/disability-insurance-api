const express = require('express')
const router = express.Router()
const {
  getAllPolicies,
} = require('../controllers/policies.ctrl')

router.get('/', getAllPolicies)

module.exports = router