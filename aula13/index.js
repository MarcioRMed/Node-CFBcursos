// Usando mongoDB

// aulas 13,14
// npm install mongodb
// 6VCEA6rGtXjxbncO   senha

const mongodb=require('mongodb').MongoClient
const url="mongodb+srv://marcio:6VCEA6rGtXjxbncO@cluster0.o0h8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{                
  if(erro) throw erro


  const dbo=banco.db('cfbcursos')
  const obj={curso:'Curso de Node',canal:'CBF Cursos'}
  const colecao='cursos'
  
  
  // inserir dados==========
  // dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
  //   if(erro) throw erro
  //   console.log('novo curso inserido')
  //   banco.close()
  // })

  dbo.collection(colecao).find({}).toArray((erro,resultado)=>{ 
  if(erro)throw erro
  console.log(resultado)
  banco.close()
  })


})


// find mostra tudo
// dbo.collection(colecao).find({}).toArray((erro,resultado)=>{


// findOne // procura o 1 registro
// // dbo.collection(colecao).findOne({},(erro,resultado)=>{
  
// especificando o que procurar
// dbo.collection(colecao).findOne({"curso: 'curso de Node"},(erro,resultado)=>{
