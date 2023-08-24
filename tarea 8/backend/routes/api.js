var express=require('express');
var router=express.Router();
var productoModel=require('./../models/productoModel');
var cloudinary=require('cloudinary').v2;

router.get('/productos',async function(req,res,next){
    let productos=await productoModel.getProducto();
    productos=productos.map(productos=>{
        if(productos.imagen){
            if(productos.imagen){
                const imagen=cloudinary.image(productos.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                });
                return{
                    ...productos,
                    imagen
                }
            }else{
                return{
                    ...productos,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});
router.get('/ps5',async function(req,res,next){
    let productos=await productoModel.getPs5();
    productos=productos.map(productos=>{
        if(productos.imagen){
            if(productos.imagen){
                const imagen=cloudinary.image(productos.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                });
                return{
                    ...productos,
                    imagen
                }
            }else{
                return{
                    ...productos,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});


module.exports=router;