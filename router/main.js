module.exports = function (app, fs) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Nonesense Quiz',
            length: 5
        });
    });
    app.get('/create', function (req, res) {
        res.render('create', {
            title: ""
        });
    });
}
