const express = require('express');

const controllerPerfil={
    'principal':(req,res)=>{
        res.render('user/perfil.ejs')
    },
    
}
module.exports=controllerPerfil;