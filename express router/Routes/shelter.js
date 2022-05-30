const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('shelter')
})
router.put('/', (req, res) => {
    res.send('post shelter')
})
router.get('/:id', (req, res) => {
    res.send('view shelter')
})
router.get('/:id/edit', (req, res) => {
    res.send('Edit shelter')
})

module.exports = router;