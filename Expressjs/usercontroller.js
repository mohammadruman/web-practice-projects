const registeruser = (req,res) => {
    const Username = req.body.name;
    const Useremail = req.body.email;    
    const Userpassword = req.body.password;

res.json({
    success:true,
});
};
module.exports = registeruser;