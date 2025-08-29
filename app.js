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

     //-----CADASTRO ALUNOS
     app.post('/alunos', (req, res) =>{
        alunos.push(req.body);
        res.send(alunos);
     })

      //---------CADASTRO CURSOS
     app.post('/alunos/cursos', (req,res) =>{
      const {ra} = req.query;
      const {cursos} = req.body;
      const index = alunos.findIndex(aluno => aluno.ra == ra)

      if (!alunos[index].cursos){
         alunos[index].cursos = [];
      }
      alunos[index].cursos.push(...cursos);
      res.send(alunos[index]);
     })

     //-----------ALTERAR ALUNO
     app.put('/alunos', (req,res) =>{
      const {ra} = req.query;
      const {name, turma} = req.body;
        const index = alunos.findIndex(aluno => aluno.ra == req.query.ra)
        alunos[index] = {ra : ra, name: req.body.name, turma: req.body.turma}
        res.send(JSON.stringify(alunos));
     })

     //-----------ALTERAR CURSO
     app.put('/alunos/cursos', (req, res) =>{
      const {ra} = req.query;
      const {cursos} = req.body;
      const index = alunos.findIndex(aluno => aluno.ra == ra)
      alunos[index].cursos = {cursos: cursos}
      res.send(alunos[index])
     })

     //-----------DELETAR ALUNO
     app.delete('/alunos', (req, res) =>{
      const {ra} = req.query;
        const index = alunos.findIndex(aluno => aluno.ra == req.query.ra)
        alunos.splice(index, 1)
        res.send(JSON.stringify(alunos))
     })

     //----------DELETAR CURSO
   app.delete('/alunos/cursos/cursosdeletar', (req, res) =>{
         const {ra} = req.query;
         const cursoDeletado = req.body(cursos);
         res.send(cursoDeletado)
         console.log(cursoDeletado);
         const index = alunos.findIndex(aluno => aluno.ra == ra)
   
         for (i = 0; i < alunos[index].cursos.length; i++){
            if (alunos[index].cursos[i] == cursoDeletado){
               alunos[index].cursos.splice(i, 1)
            }
         }
         res.send(JSON.stringify(alunos))
      });

      //--------------MOSTRAR ALUNOS---okk
     app.get('/alunos', (req,res) =>{
      res.send(alunos);
     })
     //-------------MOSTRA ALUNOS PELO RA----ok
     app.get('/alunos/alunora', (req, res) =>{
      const { ra } = req.query;
      const index = alunos.findIndex(x => x.ra == ra);
      res.send(alunos[index]);
     })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})