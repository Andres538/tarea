var pool=require('./db');

async function getUserByGmailandPassword(mail,password){
    try{
        var query="select * from cliente where mail=? and contraseña=?"
        var rows= await pool.query(query, [mail,password]);
        return rows[0];
    }catch(error){
        throw error;
    }
}

module.exports={getUserByGmailandPassword}