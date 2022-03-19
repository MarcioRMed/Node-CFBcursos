(async ()=>{
  const db=require('./db')


// ======inserir clientes=============================
  // console.log('Inserir novo cliente')
  // const nomeCliente ='Marcio'
  // const idadeCliente='38'
  // await db.insereCliente({nome:nomeCliente,idade:idadeCliente})

  

// =======atualizar clientes=======================
  // const id = 3
  // const nomeCliente='Marcio'
  // const idadeCliente='20'
  // await db.atualizaCliente(id,{nome:nomeCliente,idade:idadeCliente})
  // console.log('cliente' + id + 'atualizado')


  const id = 3
  await db.deletarCliente(id)
  console.log('cliente' + id + 'deletado')


  console.log('Obter todos os clientes')
  const clientes=await db.todosClientes()
  console.log(clientes)
})()

