const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

const port=3000;

let posts= [
    {
        id: uuidv4(),
        username: "erenYeager",
        content: "It doesn't matter how strong the opposition is. It doesn't matter how fearsome the world is. It doesn't matter how cruel the world is. Just fight!!",
    },
    {
        id: uuidv4(),
        username: "erenYeager",
        content: "If you win, you live. If you lose, you die. if you don't fight, you can't win!!",
    },
    {
        id: uuidv4(),
        username: "mikasaAckerman",
        content:"The world is cruel but also beautiful!",
    },
    {
        id: uuidv4(),
        username: "arminArlert",
        content: "If there are humans who can bring about change, they're those who are capable of abandoning everything. People who, when requied to surpass even monsters, are capable of tossing aside their very humanity",
    },
    {
        id: uuidv4(),
        username: "leviAckerman",
        content: "No one knows what the outcome will be. So, choose whatever... you'll regret the least",
    },
];


app.get("/",(req,res)=>{
    res.send("Welcome to the inside of the wall!..");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/posts/:id",(req,res)=>{
    let { id }=req.params;
    let post=posts.find((post)=>post.id===id);
    console.log(post);
    res.render("view.ejs",{post});
});

app.post("/posts",(req,res)=>{
    let id =uuidv4();
    let {username,content}= req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params;
    let post=posts.find((post)=>post.id===id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent= req.body.content;
    let post=posts.find((post)=>post.id===id);
    post.content=newContent;
    res.render("view.ejs", {post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((post)=>post.id!==id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});