module.exports = function(app) {
    app.use('/api/resolver', require('./routes/api/resolver'));
};