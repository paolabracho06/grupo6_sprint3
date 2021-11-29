const express = require('express');

const controllerPages = {
    'home': (req, res) => {
        res.render('pages/home.ejs')
    },
    'login': (req, res) => {
        res.render('pages/login.ejs')
    },
    'carrito':(req,res)=>{
        res.render('pages/carrito.ejs')
    },
    'register':(req,res)=>{
        res.render('pages/register.ejs')
    }
}

module.exports = controllerPages;