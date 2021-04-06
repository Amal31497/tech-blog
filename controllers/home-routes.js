const router = require('express').Router();
const { User,Blog,Comment } = require('../models');
const withAuth = require('../utils/auth');

// -----------------------------------------------------
router.get('/', async (req,res) => {
    try {
        const blogData = await Blog.findAll({
            include:[{model:User},{model:Comment}]
        })

        const blogs = blogData.map((blog) => blog.get({ plain:true }))
        return res.render('homepage',{
            blogs,
            logged_in: req.session.logged_in 
        })
        
    } catch (err) {
        res.status(404).json(err);
    }
})
// -----------------------------------------------------
router.get('/dashboard', async (req,res) => {
    try {
        const blogData = await Blog.findAll({
            where:{user_id:req.session.user_id},
            include:[{model:User},{model:Comment}]
        })

        const blogs = blogData.map((blog) => blog.get({ plain:true }))
        return res.render('dashboard',{
            blogs,
            logged_in: req.session.logged_in 
        })
        
    } catch (err) {
        res.status(404).json(err);
    }
})
// -----------------------------------------------------
router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
    }

    res.render('login')
})
// -----------------------------------------------------
router.get('/signup', (req,res)=>{
    if(req.session.logged_in){
        res.redirect('/dashboard');
    }
    res.render('signup')
})
// -----------------------------------------------------



module.exports = router;