const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAd) {
        return next();
    }
    return res.send("SORRY NOT AN ADMIN!")
})

router.get('/', (req, res) => {
    res.send('THIS IS TOP SECRET PATH')
})
router.get('/delete_everything', (req, res) => {
    res.send('OK DELETED IT ALL!')
})

module.exports = router;
