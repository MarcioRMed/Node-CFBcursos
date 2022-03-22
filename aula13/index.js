// Usando mongoDB

// aulas 13,14,15,16,17.18,19,20,21
// npm install mongodb

const mongodb=require('mongodb').MongoClient
const url="mongodb+srv://marcio:6VCEA6rGtXjxbncO@cluster0.o0h8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{                
  if(erro) throw erro
  const dbo=banco.db('cfbcursos')
  const colecao='cursos'

  // adicionar cursos===================================
//   const obj=[
//     {curso:'Curso de Node',canal:'CFB Cursos'},
//     {curso:'Curso de Javascript',canal:'CFB Cursos'},
//     {curso:'Curso de Arduino',canal:'CFB Cursos'},
//     {curso:'Curso de C++',canal:'CFB Cursos'},
//     {curso:'Curso de Java',canal:'CFB Cursos'}
// ] 
  
  
// dbo.collection(colecao).insertMany(obj, async(erro,resultado)=>{
//     if(erro) throw erro
//     await console.log(resultado.insertedCount + ' novo(s) curso(s) inseridos')
//     banco.close()
//   })

  
  // inserir dados=================================================================
  // dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
  //   if(erro) throw erro
  //   console.log('novo curso inserido')
  //   banco.close()
  // })


  // encontrar registro dentro da coleção====================================
  // const query={curso: /C./} //query - consulta
  // const query={} //todos

  // dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{ 
  //   if(erro)throw erro
  //   // console.log(resultado)
  //   console.log(resultado[2].curso)
  //   banco.close()
  //   })


  // ordenação - pesquisa - método SORT==========================
  
  // const ordenação={curso:-1} //     1 crescente -1 decrecente
  // const query={}

  // dbo.collection(colecao).find(query).sort(ordenação).toArray((erro,resultado)=>{ 
  //   if(erro)throw erro
  //   console.log(resultado)
  //   // console.log(resultado[2].curso)
  //   banco.close()
  //   })


  // Deletar objeto da coleção====================

  // let query={curso: 'Curso de Node'}
  
  // dbo.collection(colecao).deleteOne(query,(erro,resultado)=>{  
  //   if(erro)throw erro
  //   console.log('curso deletado')
  //  })


  // deleteMany- delete varios ao mesmo tempo===================
  // let query ={curso:/.o/}   
  // dbo.collection(colecao).deleteMany(query,async (erro,resultado)=>{ 
  //   if(erro)throw erro
  //   await console.log(resultado.deletedCount + ' curso(s) deletado(s)')
  //  })


  // ======listar após o delete============
  // query={} //     
  // dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{ 
  //   if(erro)throw erro
  //   console.log(resultado)
  //   banco.close()
  //   })




// modificando /atualizando objetos=================== 
// updateOne 

// updateMany

// Atualização de objetos

let query={curso: 'Curso de Javascript 2022'}
let novoObj={$set:{curso: 'Curso de Javascript 2023'}}

// dbo.collection(colecao).updateOne(query,novoObj,(erro,resultado)=>{ 
//   if(erro)throw erro
//   console.log('curso atualizado')
// })

// atualiza varios objetod de uma só vez
dbo.collection(colecao).updateMany(query,novoObj,async(erro,resultado)=>{ 
  if(erro)throw erro
  await console.log(resultado.modifiedCount + ' cursos atualizados')
})

  
// lista o banco de dados=====================
query={}
dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
if(erro) throw erro
console.log(resultado)
banco.close()
})




})


// returna todo o contéudo
// const query={} //todos
// dbo.collection(colecao).find(query).toArray((erro,resultado)=>{ 




// regex - query - consulta
// /.t/ - terminando com a letra t
// /C./ - lista todos com a letra c
// const query={curso: /C./} //query - consulta
// const query={} //todos






// projection - _id:0 - nao mostra   id:1 - mostra

// find mostra tudo - como se fosse um seleect * fron
// dbo.collection(colecao).find({}).toArray((erro,resultado)=>{


// findOne // procura o 1 registro
// // dbo.collection(colecao).findOne({},(erro,resultado)=>{
  
// especificando o que procurar
// dbo.collection(colecao).findOne({"curso: 'curso de Node"},(erro,resultado)=>{
