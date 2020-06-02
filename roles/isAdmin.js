module.exports= (res,req,next) => {
if(req.user.role!="admin"){
    return res.status(403).send("Unauthorized Access");
    
}next();
}