const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', (req, res, next) =>  {
  const data = fs.readFileSync('mock/baseData.json')
  res.send(JSON.parse(data))
});

module.exports = router;
