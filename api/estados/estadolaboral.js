const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../DB/db');




//show all products
router.get('/api/estados/estadolaboral',(req, res) => {
  var sql = 'SELECT * FROM estadolaboral'
  //var sql = "CALL getEmployees()";
  mysqlConnection.query(sql, (err, results, fields) => {
    if(!err) 
      res.json(results);
    else 
      console.log(err);
  });
});

//show single product
/*
app.get('/api/empleados/:ddd',(req, res) => {
  let sql = "SELECT * FROM empleados WHERE emp_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});
*/



//add new product
/*
app.post('/api/products',(req, res) => {
let data = {product_name: req.body.product_name, product_price: req.body.product_price};
let sql = "INSERT INTO product SET ?";
let query = conn.query(sql, data,(err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

//update product
/*
app.put('/api/products/:id',(req, res) => {
let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
let query = conn.query(sql, (err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

//Delete product
/*
app.delete('/api/products/:id',(req, res) => {
let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
let query = conn.query(sql, (err, results) => {
  if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
});*/

module.exports = router;

