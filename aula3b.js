const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(req.url);  // ex. /curso/node
  const parametro=url.parse(req.url,true).query;
  res.write('<br>' +parametro.nome);
  res.write('<br>'+parametro.curso);
  res.end();

});

servidor.listen(porta,host,()=>{console.log('Servidor rodando na porta 3000')});



// http://localhost:3000/?nome=bruno&curso=Curso+de+Node
// bruno
// Curso de Node


// Criando Rotas no servidor
// consegue parametros de entrada da url











 // comentários
 // Rotas externas no servidor
/**
 * 
 * 
 * 
 * 
 */



