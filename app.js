const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let nomes = []

//first endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

let alunos = [
    {ra: 123, name: "José", turma: "Administração", 
    cursos: ['JavaScript', "ReactJS", "Redux"]
    },
     {ra: 122, name: "Maria", turma: "ADS",
     cursos: ["VueJS", "Ruby on Rails", "Node"]}];

     app.post('/alunos', (req, res) =>{
        alunos.push(req.body);
        res.send(alunos);
     })

     app.post('/alunos', (req,res) =>{
        const index = alunos.findIndex(aluno => aluno.ra == req.query.ra)
        alunos[index] = 
     })

     app.put('/alunos', (req,res) =>{
        const index = alunos.findIndex(aluno => aluno.ra == req.query.ra)
        alunos[index] = {name: req.body.name, turma: req.body.turma}
        res.send(JSON.stringify(alunos));
     })
     app.delete('/alunos', (req, res) =>{
        const index = alunos.findIndex(aluno => aluno.ra == req.query.ra)
        alunos.splice(index, 1)
        res.send(JSON.stringify(alunos))
     })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
