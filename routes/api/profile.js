const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

// route =  GET api/profile/me
// desc  =  Get current users profile
// access = public
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        ['name', 'avatar']);

        if(!profile){
            res.status(400).json({ msg: 'Profile not found' });
        }
        res.json(profile)
    } catch (error) {
        console.log(error.message);
        res.send(500).send('Server Error')
    }
})

module.exports = router;