import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        //dirname retorna o diretório atual 
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, //use como padrão o null
});

export default db;