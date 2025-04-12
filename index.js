let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.get("/ping",(request,response)=>{response.send("hi")});
app.get("/num",(request,response)=>{
    let str = request.query.number;
    let n = parseInt(str);
    let fact = 1;
    for(let i=1;i<=n;i++)
    {
        fact =  fact * i;
    }
    response.send(`Factorial = ${fact}`);
});
app.listen(9000,()=>{console.log("Express is ready")});

