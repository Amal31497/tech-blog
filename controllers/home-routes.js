const router = require('express').Router();
const { User,Blog,Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const blogData = await Blog.findAll({
            include:[{model:User},{model:Comment}]
        })

        const blogs = blogData.map((blog) => blog.get({ plain:true }))
        return res.render('homepage',{blogs})
        
    } catch (err) {
        res.status(404).json(err);
    }
})

router.get('/dashboard', withAuth, async (req,res) => {
    try {
        const blogData = await Blog.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: User },{model:Comment}],
        });

        const blogs = blogData.map((blog) => blog.get({ plain:true }))

        res.render('dashboard', {
            blogs,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login')
})

module.exports = router;