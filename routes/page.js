const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = null;
    res.locals.followCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});


router.get('/signup', (req, res) => {
    res.render('signup', {
        title: '회원가입',
    });
});

router.get('/', (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'smartpill',
        twits,
    });
});


module.exports = router;