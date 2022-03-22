// Usando mongoDB

// aulas 13,14,15,16,17.18,19,20,21
// npm install mongodb

const mongodb=require('mongodb').MongoClient
const url="mongodb+srv://marcio:6VCEA6rGtXjxbncO@cluster0.o0h8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{                
  if(erro) throw erro
  const dbo=banco.db('cfbcursos')
  const colecao1='cursos'
  const colecao2='detalhesCursos'

  // adicionar cursos===================================

/*  
  
  let obj=[
    {idcurso:01,curso:'Curso de C++',canal:'CFB Cursos'},
    {idcurso:02,curso:'Curso de HTML',canal:'CFB Cursos'},
    {idcurso:03,curso:'Curso de CSS',canal:'CFB Cursos'},
    {idcurso:04,curso:'Curso de Javascript',canal:'CFB Cursos'},
    {idcurso:05,curso:'Curso de PHP',canal:'CFB Cursos'},
    {idcurso:06,curso:'Curso de Node',canal:'CFB Cursos'},
    {idcurso:07,curso:'Curso de React',canal:'CFB Cursos'},
    {idcurso:08,curso:'Curso de React-Native',canal:'CFB Cursos'},
    {idcurso:09,curso:'Curso de Arduino',canal:'CFB Cursos'},
    {idcurso:10,curso:'Curso de Photoshop',canal:'CFB Cursos'},    
    {idcurso:11,curso:'Curso de AppInventor',canal:'CFB Cursos'},
    {idcurso:12,curso:'Curso de Flash',canal:'CFB Cursos'},
    {idcurso:13,curso:'Curso de Unity',canal:'CFB Cursos'},
    {idcurso:14,curso:'Curso de C#',canal:'CFB Cursos'},
    {idcurso:15,curso:'Curso de Java',canal:'CFB Cursos'},
    {idcurso:16,curso:'Curso de QT Creator',canal:'CFB Cursos'},
    {idcurso:17,curso:'Curso de SQL',canal:'CFB Cursos'},
    {idcurso:18,curso:'Curso de Python',canal:'CFB Cursos'}
] 
  
// inserir varios objetos
  
dbo.collection(colecao1).insertMany(obj, async(erro,resultado)=>{
    if(erro) throw erro
    await console.log(resultado.insertedCount + ' novo(s) curso(s) inseridos')
    // banco.close()
  })

  

obj=[
  {idcurso:01, aulas:192},
  {idcurso:02, aulas:264},
  {idcurso:03, aulas:77},
  {idcurso:04, aulas:122},
  {idcurso:05, aulas:50},
  {idcurso:06, aulas:21},
  {idcurso:07, aulas:45},
  {idcurso:08, aulas:46},
  {idcurso:09, aulas:75},
  {idcurso:10, aulas:30},
  {idcurso:11, aulas:48},
  {idcurso:12, aulas:60},
  {idcurso:13, aulas:44},
  {idcurso:14, aulas:132},
  {idcurso:15, aulas:51},
  {idcurso:16, aulas:89},
  {idcurso:17, aulas:42},
  {idcurso:18, aulas:86}
]

dbo.collection(colecao2).insertMany(obj, async(erro,resultado)=>{
  if(erro) throw erro
  await console.log(resultado.insertedCount + ' novo(s) curso(s) inseridos')
  // banco.close()
})


*/

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
  //   console.log(resultado)
  //   // console.log(resultado[2].curso)
  //   banco.close()
  //   })


  // ordenação - pesquisa - método SORT==========================
  
  // const ordenação={curso:1} //     1 crescente -1 decrecente
  // const query={}

  // dbo.collection(colecao).find(query,{projection:{_id:0}}).sort(ordenação).toArray((erro,resultado)=>{ 
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
// updateOne // updateMany

// Atualização de objetos 1 objeto

// let query={curso: 'Curso de Javascript 2022'}
// let novoObj={$set:{curso: 'Curso de Javascript 2023'}}

// dbo.collection(colecao).updateOne(query,novoObj,(erro,resultado)=>{ 
//   if(erro)throw erro
//   console.log('curso atualizado')
// })

// atualiza varios objetos de uma só vez
// dbo.collection(colecao).updateMany(query,novoObj,async(erro,resultado)=>{ 
//   if(erro)throw erro
//   await console.log(resultado.modifiedCount + ' cursos atualizados')
// })

  


// lista o banco de dados=====================
// query={}
// dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
// if(erro) throw erro
// console.log(resultado)
// banco.close()
// })





// limintando o número de objetos retornados
// const query={curso: /.t/}
// const limite = 5
// // const query={}  //todos

// dbo.collection(colecao)
//    .find(query,{projection:{_id:0}})
//    .limit(limite)
//    .toArray((erro,resultado)=>{ 
//     if(erro)throw erro
//     console.log(resultado)
//   // console.log(resultado[2].curso)
//     banco.close()
//   })






// Juntando coleções com JOIN=====================

// inserindo as tabelas
// query={}
// dbo.collection(colecao1).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
// if(erro) throw erro
// console.log(resultado)
// // banco.close()
// })


// query={}
// dbo.collection(colecao2).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
// if(erro) throw erro
// console.log(resultado)
// // banco.close()
// })





// listagem para unir 2 coleções - JOIN
let query={}
dbo.collection(colecao1).aggregate([
  { $lookup:{
      from:'detalhesCursos',
      localField:'idcurso',
      foreignField:'idcurso',
      as:'Detalhes'
    }
  }

]).toArray((erro,resultado)=>{
if(erro) throw erro
console.log(JSON.stringify(resultado))
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
