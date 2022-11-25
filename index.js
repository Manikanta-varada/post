const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=5000

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("respons")
})

app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const {name,password,select,gender}=req.body;
	console.log(req.body)
	console.log(name,password,select,gender)
	res.send("added")

})

app.listen(port,()=>console.log("server is starting"))