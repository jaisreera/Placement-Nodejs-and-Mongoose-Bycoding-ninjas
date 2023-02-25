const Employee=require('../models/employee')


module.exports.SignUp=function(req,res){
    res.render('employee_SignUp')
}


module.exports.create=async function(req,res){
    console.log(req.body)
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    Employee.findOne({email: req.body.email}, function(err, user){
        if(err){
            // req.flash('error', err);
         return}

        if (!user){
            Employee.create(req.body, function(err, user){
                if(err){
                    // req.flash('error', err); 
                    return}

                return res.redirect('/employee/sign_in');
            })
        }else{
            // req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
    // res.redirect('back')
}


module.exports.signIn=function(req,res){
    
    res.render('employee_SignIn')
}


module.exports.createSession=function(req,res){}


module.exports.Add_Student_To_Interview=function(req,res){
    res.send('this is working')
}


module.exports.add_student_to_cell=function(req,res){}


module.exports.add_interview=function(req,res){}


module.exports.add_interview_to_cell=function(req,res){}

module.exports.logout=function(req,res){}