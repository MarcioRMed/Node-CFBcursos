// Upload de arquivos em Node- módulo formidable

//nao funcionou ???
// link da aula
// https://www.youtube.com/watch?v=ddgGeQvr67c&list=PLx4x_zx8csUjFC41ev2qX5dnr-0ThpoXE&index=12

const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

// const msg = 'servidor rodando porta 3000'


const servidor=http.createServer((req,res)=>{
  if (req.url == '/envioDeArquivo') {
    const form = new formidavel.IncomingForm()
    form.parse(req, (erro, campos, arquivos)=>{
      const urlantiga = arquivos.filetoupload.path
      const urlnova = 'C:/Users/Márcio/' + arquivos.filetoupload.name
     
      fs.rename(urlantiga, urlnova, (erro)=>{
        if (erro) throw erro
        res.write('Arquivo movido')
        res.end()
      })
    })

  }else{
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
      res.write('<input type="file" name="filetoupload"><br>')
      res.write('<input type="submit" value="Enviar"')
      res.write('</form>')
      return res.end()
  }
})
servidor.listen(porta)