const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',async(req,res)=>{
    try {
        const blogData = await Blog.findAll();
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req,res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            users_id: req.session.user_id,
        })

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', withAuth, async(req,res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                blog_id:req.params.blog_id,
                users_id: req.session.user_id
            }
        })

        if(!blogData){
            res.status(404).json({message:"No blogs found with this id"});
            return;
        }

        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;