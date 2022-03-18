// api base

const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000

const app=express()

app.use('/',rotas)

app.get('*',(req,res)=>{
  res.send('CFB Curso')
})

app.listen(porta,()=>{console.log('Servidor rodando na porta 3000')})