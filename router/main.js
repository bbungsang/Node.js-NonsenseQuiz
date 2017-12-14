module.exports = function (app, fs) {
    // MySQL 연결
    var mysql = require('mysql');
    var config = require('../db/db_info').local;
    var connection = mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
    });

    app.get('/solve/:id', function (req, res) {
        var id = req.params.id;
        var stmt = "SELECT * FROM nonsense_quiz WHERE id=" + id;
        connection.query(stmt, function (err, result) {
           if (err) throw err;
           var result = result[0];
           res.render('solve', {
               title: 'Nonesense Quiz',
               result: result
           });
        })
    });

    app.get('/create', function (req, res) {
        res.render('create', {
            title: ""
        });
    });
}
