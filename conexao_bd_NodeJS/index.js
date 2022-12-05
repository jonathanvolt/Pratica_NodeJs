(async ()=>{
    const db=require('./db')

//insere pessoa na tabela;

 //   console.log('Inserir pessoa no cadastro')
 //   const nom="Fabiana Fernandes"
 //   const ida= 28
 //   await db.insereClientes({nome:nom,idade:ida})

 // altera cadastro por id
  //  const id=1
   // const nom="Adriana Almeida"
  //  const ida= 35
  //  console.log('Atualizar cadastro')
 //   console.log('Cliente ' + nom + ' atualizado.')
 //   await db.atualizaClientes(id,{nome:nom,idade:ida})

 const id=3
 await db.deletaClientes(id)
    console.log('Cliente ' + id + ' atualizado.')

    console.log('Informar todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()

// neste modelo, nao da para inserir uma pessoa e ao mesmo tempo alterar cadastro, da conflito nas variaveis