// Modularizando as rotas do app node
// npm insatall express --save
// npm install router --save


const express = require('express')
const rotas=express.Router()

let cursoInfo=[
  {'curso':'node','info':'Curso de Node'},
  {'curso':'react','info':'Curso de React'},
  {'curso':'java','info':'Curso de Java'},
  {'curso':'arduino','info':'Curso de Arduino'}
]

rotas.get('/',(req, res)=>{
  res.json({ola:'Seja bem vindo'})
})

rotas.get('/:cursoid',(req,res)=>{
  const curso = req.params.cursoid
  const cursoInf=cursoInfo.find(i=>i.curso == curso)
  if(!cursoInf){
    res.status(404).json(
      {erro:'Curso não encontrado', cursoPesquisado:curso}
    )
  }else{
    res.status(200).json(cursoInf)
  }

})

module.exports=rotas