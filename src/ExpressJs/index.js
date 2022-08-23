import express, { json }  from "express";
import { hostname } from "os";
import cors from "cors";


let notes = [
    
    {
         "id":1,
        "content":"Usuario 2 ",
        "date":"22/8/2022",
        "important": true,
    
    },
    
    {
        "id":2,
        "content":"Usuario 1 ",
        "date":"22/8/2022",
        "important": false,
        
    },
    
    {
        "id":3,
        "content":"Usuario 3 ",
        "date":"22/8/2022",
        "important": true,
        
    }
    
    
 ]


const app = express()

app.use(express.json())

app.use(cors())

app.use((req, res, next) => {

console.log(req.body)
console.log(req.method)
console.log(req.path)
console.log("-*----*----*-")

next()

})


//Get
app.get(("/api/notes"),(req, res) => {res.json(notes)});

app.get(("/api/notes/:id"),(req, res) => {const id = Number(req.params.id)
    
console.log("the id is ", + id)

const note = notes.find(note => note.id === id)

if(note){

    res.json(note)

}else{

res.send("Nota No encontrada Status code:404");
res.status(404).end()

}

    
console.log("the id is ", + id)

});

//Delete
app.delete(("/api/notes/:id"),(req, res) => {const id = Number(req.params.id)

notes = notes.filter(note => note.id !== id)

res.status(204).send("Nota Eliminada")

});

//Principal
app.get(("/"),(req, res) => {res.send("<h1>Bienvenido A mi Servidor Api Rest</h1> <a href = http://localhost:3000/api/notes>Api</a>")});


//Post
app.post(("/api/notes"),(req, res) =>{

const note = req.body

if (!note || !note.content){

return(res.status(400).json({error: "Need Content, note.content is missing"})
 
    
)}

const ids = notes.map(note => note.id)
const maxID = Math.max(...ids)

const newNote = {

id: maxID +1,
content: note.content,
date: new Date().toISOString(),
important: typeof note.important !== "undefined" ? note.important : false, // note.important || false

}

notes = [...notes, newNote]

console.log(note)

res.json(newNote).status(201)


});

//Put
app.put(("/api/notes/:id"),(req, res) => {

const id = Number(req.params.id)

const notess = notes.find(note => note.id === id)

notes = notes.filter(note => note.id !== id)

const note = req.body

const newNote = {

id: notess.id,
content: note.content,
date: new Date().toISOString(),
important: typeof note.important !== "undefined" ? note.important : false,

}

notes = [...notes, newNote]

console.log(note)

res.json(newNote).status(201)


//Rest Api




})

app.listen(3000, hostname)

console.log("Server is listening on port",3000);
