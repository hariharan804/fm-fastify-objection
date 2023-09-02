 
import { Model } from 'objection';
import fp from 'fastify-plugin'
import * as knexPkg  from 'knex';
 

export interface DBConfig {
    
}

const knexInit = knexPkg.knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '123456',
      database : 'bus_tickcet_booking'
    }
})
export default fp<DBConfig>(async (fastify, opts) => {
    // const { knex } = knexPkg.default;

    // knexPkg.Knex
    Model.knex(knexInit); 
    await checkHeartbeat(knexInit);
    
    fastify.decorate('knex', knexInit)
});

async function checkHeartbeat(knex: knexPkg.Knex<any,unknown[]>) {
    await knex.raw('SELECT 1')
}
export {knexInit};