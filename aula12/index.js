// Upload de arquivos em Node- módulo formidable

const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')
const msg = 'servidor rodando porta 3000'



const servidor=http.createServer((req,res)=>{
  if(req.url == '/envioDeArquivo'){
    const form = new formidavel.IncomingForm()
    form.parse(req,(erro, campos, arquivos)=>{
      const urlantiga = arquivos.filetoupload.path
      const urlnova = 'C:/Users/Márcio/Desktop/DADOS/DEV_Programação/CURSOS/PROFESSORES/NODE_JS/CFB/Node-CFBcursos/aula12/' + arquivos.filetoupload.name
      fs.rename(urlantiga, urlnova, (erro)=>{
        if(erro) throw erro
        res.write('Arquivo movido')
        res.end()
      })
    })
  }else{
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
      res.write('<input type="file" name="filetoupload"><br>')
      res.write('<input type="submit" value="Enviar"')
      res.write('</form>')
      return res.end()
  }



})
servidor.listen(porta, console.log(msg))