module.exports = function(app) {
    app.use('/', require('./routes/public'));
    // app.use('/view', require('./routes/public/view'));

    app.use('/api/resolver', require('./routes/api/resolver'));
};