  //Node com banco de dados
  //MySQL 
  //npm intall mysql2 --save

  const conectar = async()=>{
    if(global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    
      const mysql=require('mysql2/promise')
      const conexaoMysql=mysql.createConnection("mysql://root:123456789@localhost:3306/cursos")
      console.log('Conectou ao banco')
      global.conexao=conexaoMysql
      return conexaoMysql      
  }


  const todosClientes = async()=>{
    const conexaoMysql=await conectar()
    const [linhas] = await conexaoMysql.query('SELECT * FROM cliente_node')
    return await linhas
  }
 
  module.exports={todosClientes}

  // cliente_node - tabela