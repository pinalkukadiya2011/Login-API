var usermodel = require('../model/usermodel');
const storage = require('node-persist');


exports.register = async (req,res) =>{
    var existuser = await usermodel.find({email : req.body.email});

    if(existuser.length > 0){
        res.status(200).json({
            status : 'user already exist',
        });
    }
    else{
        var data = await usermodel.create(req.body);

        res.status(200).json({
            status : 'data inserted successfully',
            data
        });
    }
}


exports.login = async (req, res) => {

var user = await usermodel.find({email: req.body.email});
//    login_data=user[0].id;

        await storage.init(  );
        var user_login = await storage.getItem('user_login')

if(user_login==undefined)
     {  
      if(user.length == 1 )
       {
          
              if(req.body.password == user[0].password)
              {
                await storage.init(  );
                await storage.setItem('user_login',user[0].id)
                         res.status(200).json({
                            status : "user logged in successfully",
                         });
              }
             
             else{
                        res.status(200).json({
                            status : "wrong password"
                        })
                }
        }
        else
        {
            res.status(200).json({
                status : "user not exists"
            });
        }
    }
    else{
        res.status(200).json({
            status:"user is already login"
        })
    }
    

    
};


exports.logout = async (req,res) =>{
    await storage.init();
    await storage.clear();
     res.status(200).json({
            status:"success"
        });
    }




