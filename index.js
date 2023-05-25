const express = require('express');
const app = express();
const path = require('path');
const hbs  = require('hbs');
const port = process.env.PORT || 4000;


const staticPath = path.join(__dirname,"./public")
app.use(express.static(staticPath))

const templets_path = path.join(__dirname,"./templets/views")
app.set('view engine','hbs');
app.set('views',templets_path)

const partial_path = path.join(__dirname,"./templets/partials")
hbs.registerPartials(partial_path)

app.get('/', (req, res) => {
     res.render("index")
})

app.get("/about",(req,res)=>{
     res.render("about");
})

app.get("/weather",(req,res)=>{
     res.render("weather");
})

app.get("*",(req,res)=>{
     res.render("404error",{
          errorMsg:"oops! page not found"
     })
})

app.listen(port,(req,res)=>{
     console.log(`server started at port ${port}`);
})
