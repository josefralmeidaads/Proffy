import Knex  from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

       

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CaSCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at') // quando a conexão for criada este campo será criado!
        .defaultTo('now()')
        .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}