const express = require("express");

const app = express();

app.use(express.json());


app.use(express.urlencoded({
extended: true 
}));


const productData =[];



const port = 2000;
app.listen(port,()=>{

    console.log('Connected to server at http://127.0.0.1:${port}');

})



///post api 


app.post("/api/add_product",(req,res)=>{

    console.log("Result",req.body);

    const pdata = {
        "id": productData.length+1,
        "pname": req.body.pname,
        "pprice": req.body.pprice,
        "pdesc": req.body.pdesc,
    }

   productData.push(pdata);

   console.log("Final",pdata);

   res.statusCode(200).send({
    "status_code": 200,
    "meassge": "Product added successfully",
    "product": pdata
   });



});