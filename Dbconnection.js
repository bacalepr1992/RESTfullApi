var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'testapi'
 
});
module.exports=connection;