const express =require('express')
const app=express()

const tasks=require('./routes/tasks')
require('./db/connect')
const connectDB =require('./db/connect')

require('dotenv').config()
//middlwaer

app.use(express.json())//agar in o nanevisim data ra dar req.body nadarim


//routs

app.get('/hello', (req, res)=>{
    res.send('task maneger')
})

app.use('/api/v1/tasks', tasks)



const port =3000
const start = async ()=>{
    try{
await connectDB(process.env.MONGO_URI)
app.listen(port, console.log(`Server is listening in ${port}...`))
    }catch (error){
console.log('error.................')
    }
}


start()

