const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll({
            include:[
                {
                    model:Blog,
                    include:[Comment]
                }
            ]
        })

        const users = userData.map((user) => {
            user.get({ plain:true })
        })

        // console.log(blogs)

        res.render('homepage',{
            users
        })

    } catch (err) {
        res.status(404).json(err);
    }
})

router.get('/dashboard', withAuth, async (req,res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
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