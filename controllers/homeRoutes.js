const router = require('express').Router();

router.get('/', (req, res) => {
    // get data from database
    const data = [
        {
            body: "great post",
            title: "my review",
        },
        {
            body: "good post",
            title: "a review",
        },
        {
            body: "bad post",
            title: "the review",
        },
    ]

    res.render('homepage', { data: data })
})

router.get('/dogs', (req, res) => {


    res.render('dogs')
})


module.exports = router;
