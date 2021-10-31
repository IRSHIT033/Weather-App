const express=require("express")
const path=require("path")
const port=process.env.PORT||5000;
const app=express();
const hbs=require("hbs")
//public static path
const Static_Path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/partials/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",template_path);
app.use(express.static(Static_Path))
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})


app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log("listenig to the port "+ port);
})