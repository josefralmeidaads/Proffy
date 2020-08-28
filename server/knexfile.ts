import path from 'path' // gerenciado de caminhos de diretórios

module.exports = {
    client: 'sqlite3',
    connection: {
        //dirname retorna diretório atual, porém tenho que informa o caminho do banco
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}