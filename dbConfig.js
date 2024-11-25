import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  // Cria uma variável para armazenar o cliente MongoDB
  let mongoClient;

  // Tenta conectar ao banco de dados
  try {
    // Cria um novo cliente MongoDB usando a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');
    // Conecta ao banco de dados
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para que possa ser usado em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Se ocorrer algum erro durante a conexão, exibe uma mensagem de erro no console
    console.error('Falha na conexão com o banco!', erro);
    // Encerra a execução do programa
    process.exit();
  }
}