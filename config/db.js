const mysql = require('mysql2/promise')
const pg = require('pg')

const MySQLConn = async () => {
  try {

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'mercafacil'
    });
    console.log('MySQL connected..')
    return connection

  } catch (error) {

    console.log(error.message);
    process.exit(1);

  }
}

const PostgresConn = async () => {

  const pgConfig = {
    user: 'postgres',
    database: 'postgres',
    password: 'root',
    port: 5432
  };

  var pool = new pg.Pool(pgConfig)
  const client = await pool.connect()
  return client 
}



module.exports.MySQLConn = MySQLConn
module.exports.PostgresConn = PostgresConn