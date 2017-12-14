module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index.html');
    });
    app.get('/create', function (req, res) {
        res.render('create.html');
    });
}
