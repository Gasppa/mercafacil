const db = require('../config/db').MySQLConn
const StringMask = require('string-mask')

class ClienteMacapa {
  constructor(nome, celular){
    this.nome = nome
    this.celular = celular
  }

  static async save(contacts){
    var sql = "INSERT INTO contacts (nome, celular) VALUES ?";
    const conn = await db()
    const values = []

    let formatter = new StringMask('+00 (00) 00000-0000');

    for (var i in contacts){
      values.push(
        [contacts[i].name.toUpperCase(), 
        formatter.apply(contacts[i].cellphone)])
    }      
    
    conn.query(sql, [values], function(err) {
      if (err) throw err;
      conn.end();
    });
  }
}

module.exports = ClienteMacapa