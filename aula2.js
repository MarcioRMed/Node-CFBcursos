// Mini-servidor

const http = require('http');

http.createServer((requisicao,resposta)=> {
  resposta.writeHead(200,{
    'Content-Type':'text/plain'
  });

  resposta.write('CFB CURSOS\nCurso de Node.js');
  resposta.end();
}).listen(1337)




// localhost:1337 
// ou
// 127.0.0.1:1337