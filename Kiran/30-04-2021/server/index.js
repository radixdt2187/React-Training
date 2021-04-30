const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const app = express();
const fs = require('fs');
const path = require('path');
const Article = require('./models/articles');

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/MyArticles',
{
    useNewUrlParser:true,
},
 { useUnifiedTopology: true 
}
,
{ useUnifiedTopology: true },
{useFindAndModify: false});



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        debugger;
        cb(null, path.join(__dirname, '/images'));
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });



app.post('/insert',upload.single('photo'), (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const description = req.body.description;
    const photo = req.file.filename;

    const newArticleData = {
        title,
        date,
        description,
        photo
    }

    const newArticle = new Article(newArticleData);

    newArticle.save()
           .then(() => res.json('Article is Posted'))
           .catch(err => res.status(400).json('Error: ' + err));
});


app.put('/update/:id',upload.single('photo'),  function(req, res,next){

    Article.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        debugger
        Article.findOne({_id:req.params.id}).then(function(article){
            debugger
            res.send(article);
            console.log(article);
        });
    });
        
    
  });






app.get('/read',async (req,res)=>{
  
    Article.find({},(err,result)=>{
        if(err)
        { res.sendFile(path.join(__dirname, 'images'));
            res.send(err);
        }
        res.send(result);
    })
    });


    app.get('/readbyId/:id',async (req,res)=>{
        const id = req.params.id;
  
       await Article.findById(id,(err,result)=>{
            if(err)
            {
                res.send(err);
            }
            res.send(result);
        })
        });

        
app.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
debugger
try{
     Article.findById(id,(err,result)=>{
        debugger
        if(result)
        {
             Article.findByIdAndRemove(id).exec();
             var filePath  = path.join(__dirname, `/images/${_doc.photo}`);
                fs.unlinkSync(filePath);
            res.send("deleted");
        }
      
    })
 
// var filePath  = path.join(__dirname, '/images/');
// fs.unlinkSync(filePath);
}
catch(err){
console.log(err)
}
});


app.get('/readbyname/:title',async (req,res)=>{
    const title = req.params.title;

   await Article.find({title: title},function (err, search) {res.json(search);});
    });


app.listen(4000,()=>{
    console.log('server running on 4000..');
//     let reqPath = path.join(__dirname, '/images');
// console.log(reqPath);

});