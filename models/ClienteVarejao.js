const db = require('../config/db').PostgresConn

class ClienteVarejao {
  constructor(nome, celular){
    this.nome = nome
    this.celular = celular
  }

  static async save(contacts){
    const conn = await db()

    for (var i in contacts){
      conn.query(
        `INSERT INTO contacts(nome, celular) VALUES ('${contacts[i].name}', '${contacts[i].cellphone}')`,
        (err, res) => {
          if(err) console.log(err)
        }
      );
    } 
    
  }
}

module.exports = ClienteVarejao