var express=require('express');
var router=express.Router();
var productoModel= require('./../../models/productoModel');
var marcaModel= require('./../../models/marcaModel');
var categoriaModel= require('./../../models/categoriaModel');
var util=require('util');
const cloudinary=require('cloudinary').v2;

const uploader=util.promisify(cloudinary.uploader.upload);
router.get('/',async function(req,res,next){
    var data= await productoModel.getProducto();
    res.render('admin/producto/producto',
    {
        layout:'admin/layout',
        data
    });
});
router.get ('/agregar',async(req,res,next)=>{
    var marca= await marcaModel.getMarcas();
    var categoria=await categoriaModel.getCategoria();
    res.render('admin/producto/agregar',{layout:'admin/layout',marca,categoria});});
router.post('/agregar',async (req,res,next)=>{
    try{
        var img_id='';
        console.log(req.files);
        if(req.files && Object.keys(req.files).lenght>0){
            imagen=req.files.imagen;
            img_id=(await uploader(imagen.tempFilePath)).public_id;
        }
        if(req.body.nombre_p!="" && req.body.precio!="" && req.body.cantidades!=""){
            await productoModel.insertProducto(req.body,img_id);
            res.redirect('/admin/producto') 
        }else{
            var marca= await marcaModel.getMarcas();
    var categoria=await categoriaModel.getCategoria();
   
            res.render('admin/producto/agregar',{
                layout:'admin/layout',marca,categoria,
                error:true, message:'llenar los campos'
            })
            
        }
    }catch(error){
        console.log(error)
        res.render('admin/productos/agregar',{layout:'admin/layout',error:true,message:'No se cargo el producto'})
    }
});
router.get('/eliminar/:id',async (req,res,next)=>{
          var id=req.params.id;  
    await productoModel.deleteProducto(id);
            res.redirect('/admin/producto')
      
});
router.get('/modificar/:id',async (req,res,next)=>{  
    var categoria=await categoriaModel.getCategoriabyid(req.params.id);
      res.render('admin/categoria/modificar',{
        layout:'admin/layout',
        categoria
      });

});
router.post('/modificar',async (req,res,next)=>{
    try{    
            let id=req.body.id_c;
            let nombre_c=req.body.nombre_c;                                  
            await categoriaModel.UpdateCategoria(nombre_c,id);
            res.redirect('/admin/categoria')
        
    }catch(error){
        console.log(error)
        res.render('admin/categoria/modificar',{layout:'admin/layout',error:true,message:'No se cargo el cambio'})
    }
});
module.exports=router;