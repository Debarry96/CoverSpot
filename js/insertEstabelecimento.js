const mysql = require('mysql');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sua_database'
});

// Inicie a conexão
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');

  // Defina os dados a serem inseridos
  const estabelecimento = {
    nome: 'Nome do Estabelecimento',
    cnpj: '00.000.000/0000-00',
    email: 'email@example.com',
    telefone: '(00) 00000-0000',
    senha: 'senha123',
    endereco: 'Endereço do Estabelecimento',
    tipoEndereco: 'Tipo de Endereço',
    descricao: 'Descrição do Estabelecimento',
    horarioFuncionamento: 'Horário de Funcionamento',
    capacidade: 100,
    preferenciaMusical: 'Preferência Musical'
  };

  // Crie a consulta SQL para inserir os dados
  const sql = 'INSERT INTO Estabelecimento SET?';

  // Execute a consulta SQL
  connection.query(sql, estabelecimento, (err, result) => {
    if (err) throw err;
    console.log('Registro inserido com sucesso!');

    // Encerre a conexão
    connection.end();
  });
});