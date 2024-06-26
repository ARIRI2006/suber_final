const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
  
  const params = Array(
    request.body.name,
    request.body.email
  );

  const query = 'INSERT INTO cliente(nome, email) VALUES(?, ?)';

  connection.query(query, params, (err, results) => {
    if(results) {
      response
        .status(201)
        .json({
          success: true,
          message: 'Sucesso',
          data: results
        })
    } else {
      response
      .status(400)
      .json({
        success: false,
        message: 'Deu problema',
        data: err
      })
    }
  })
}

module.exports = {
  storeTask
}