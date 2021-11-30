const express = require('express');

const controllerPages = {
    'home': (req, res) => {
        res.render('pages/home.ejs')
    },
    'login': (req, res) => {
        res.render('pages/login.ejs')
    },
    'carrito':(req,res) =>{
        res.render('pages/carrito.ejs')
    },
    'register':(req,res) =>{
        res.render('pages/register.ejs')
    },
    'contacto':(req, res) =>{
        res.render('pages/contacto.ejs') 
    },
    'productDetail':(req, res) =>{
        res.render('pages/productDetail.ejs')
    }
}

module.exports = controllerPages;