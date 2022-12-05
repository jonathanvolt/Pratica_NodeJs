
// Faz a conexão com o banco de dados, conforme abaixo na criação de conexão: tipo de banco, usuário, senha, host, porta e nome do banco de dados, na ordem.

const conectar = async ()=>{
        if(global.conexao && global.conexao.state != 'disconected')
            return global.conexao
        const mysql= require('mysql2/promise')
        const con= mysql.createConnection("mysql://root:123456@localhost:3306/cfbcursos")
        console.log('O Banco de dados foi conectado')
        global.conexao= con
        return con
}
//conectar()

// é aplicado um select para exibir o conteudo cadastrado no banco selecionado.

const todosClientes = async()=>{
    const con=await conectar()
    const [linhas] = await con.query('SELECT * FROM turma')
    return await linhas
}

//o código abaixo insere informações no banco de dados 'turma', inserindo as colunas nome e idade.

const insereClientes = async(cliente)=>{
   const con=await conectar()
   const sql='INSERT INTO turma (nome,idade) VALUES (?,?)'
   const valores=[cliente.nome,cliente.idade]
   await con.query(sql,valores)
}

//o codigo abaixo atualiza um cliente, e necessario colocar id, nome e idade para funcionar.

const atualizaClientes = async(id,cliente)=>{
    const con=await conectar()
    const sql='UPDATE turma SET nome=?, idade=? WHERE id=?;'
    const valores=[cliente.nome,cliente.idade,id]
    await con.query(sql,valores)
 }


//o codigo abaixo deleta um cadastro atraves do id
const deletaClientes = async(id)=>{
    const con=await conectar()
    const sql='DELETE FROM turma WHERE id=?;'
    const valores=[id]
    await con.query(sql,valores)
 }


module.exports = {todosClientes,insereClientes,atualizaClientes,deletaClientes}


