var express = require('express');
var router = express.Router();

const { register } = require('../controller/usercontroller');
const { login } = require('../controller/usercontroller');
const { logout } = require('../controller/usercontroller');

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
// router.get('/',async function(req,res,next) {
//        res.render(user_register);
// })
// router.post('/',async function(req,res,next){
//     var data = await user_register.create(req.body);
        
// })

// router.get('/',user_register.select_data); 
// router.get('/delete/:id',user_register.delete); 
// router.post('/update/:id',user_register.update); 




module.exports = router;


