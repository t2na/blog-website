const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            blogpost_id: req.body.blogpost_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.error(err)
        res.status(400).json(err);
    }
});

module.exports = router;