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
 
 const insereCliente = async()=>{
   const conexaoMysql =await conectar()
   const sql='INSERT INTO cliente_node (nome,idade) VALUES(?,?)'
   const valores=[cliente.nome,cliente.idade]
   await conexaoMysql.query(sql,valores)
 }
 
 const atualizaCliente = async()=>{
   const conexaoMysql=await conectar()
   const sql='UPDATE cliente_node SET nome=?,idade=? WREWE id=?;'
   const valores=[cliente.nome,cliente.idade,id]
   await conexaoMysql.query(sql,valores)
 }

 const deletarCliente = async(id)=>{
   const conexaoMysql=await conectar()
   const sql='DELETE FROM cliente_node WREWE id=?;'
   const valores=[id]
   await conexaoMysql.query(sql,valores)
 }


  module.exports={todosClientes,insereCliente,atualizaCliente,deletarCliente}

  // cliente_node - tabela já criada no banco de dados