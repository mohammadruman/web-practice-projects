const express = require("express"); 
  const mongoose= require('mongoose');
  const bodyParser = require("body-parser");
  const ejs = require("ejs");
   const app = express();
    app.set('view engine', 'ejs');
     app.use(bodyParser.urlencoded({ 
        extended : false
       }));
       app.use(express.json())

       mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
              console.log("connected to db")
         }
         ).catch((err)=>{
                console.log(err)
            }   
            )
        const articleSchema = new mongoose.Schema( {
            title: String,
            content: String,
        });
            const Article = mongoose.model("Article", articleSchema);

    //create a new article api
       app.post("/api/v1/articles",async(req,res)=>{
         const article= await Article.create(req.body);
        res.status(201).json({
        status:"success",
        article
     })
    })

    //Read all articles
    app.get("/api/v1/articles/read" ,async(req,res)=>{
        const articles= await Article.find();
        res.status(200).json({
          success:"true",
            articles
        })
    })

    //Update an article
    app.put("/api/v1/articles/update/:id",async (req,res)=>{
        let article = await Article.findById(req.params.id);
        if(!article){
            res.status(500).json({
                success:"false",
                message:"article not found"
            })
        }

article = await Article.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false
})
res.status(200).json({
    success:"true",
    article
})
    
});
//Delete an article
app.delete("/api/v1/articles/delete/:id",async(req,res)=>{
const article = await Article.findById(req.params.id);
if(!article){
    res.status(500).json({
        success:"false",
        message:"article not found"
    })
}
await article.deleteOne();
res.status(200).json({
    success:"true",
    message:"article deleted"
})
})


       app.use(express.static ("public"));

         app.listen (3000, function() {
             console.log("Server started on port 3000 https://localhost:3000"); });