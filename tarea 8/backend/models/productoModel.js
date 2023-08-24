var pool=require('./db');

async function getProducto(){
    try{
        var query="SELECT id_p,nombre_p,precio,nombre_c,nombre_m,cantidades,imagen,ingreso FROM producto,categoria,marca WHERE id_categoria=id_c AND id_marca=id_m order by id_p"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getPs5(){
    try{
        var query="SELECT * FROM producto where id_marca=2"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getProductobyid(id){
    try{
        var query="SELECT id_p,nombre_p,precio,nombre_c,nombre_m,cantidades,imagen,ingreso FROM producto,categoria,marca WHERE id_categoria=id_c AND id_marca=id_m AND id_p=?"
        var rows= await pool.query(query,[id]);
        return rows[0];
    }catch(error){
        throw error;
    }
}
async function deleteProducto(id){
    try{
        var query="delete from producto where id_p=?";
        var rows=await pool.query(query,[id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
} 
async function insertProducto(obj,img){
    try{
        var query="INSERT INTO producto set id_stock=1,ingreso=now(),nombre_p='"+obj.nombre_p+"',precio="+obj.precio+",id_marca="+obj.id_marca+",id_categoria="+obj.id_categoria+",cantidades="+obj.cantidades+",imagen='"+img+"'";
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function UpdateProducto(obj,img,id){
    try{
        var query="update producto set ?,imagen='"+img+"' where id_p=?";
        var rows=await pool.query(query,[obj,id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={getProducto,getProductobyid,insertProducto,UpdateProducto,deleteProducto,getPs5}