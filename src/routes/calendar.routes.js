const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Vista del calendario");
});

module.exports = router;
