const {jwtmiddleware,generateToken}=require('./../jwt')

const router = require('express').Router();

router.get('/', jwtmiddleware, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
});

module.exports = router;