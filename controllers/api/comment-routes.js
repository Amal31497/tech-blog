const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', withAuth, async (req,res) => {
    try {
        const deletedComment = await Comment.destroy({
            where: {
                comment_id: req.params.comment_id,
                user_id: req.session.user_id
            }
        })

        if(!deletedComment){
            res.status(404).json({message : "No comments found with this id"})
            return;
        }

        res.status(200).json(deletedComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;