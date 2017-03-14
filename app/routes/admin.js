module.exports = function(application){
    application.get('/form-add-noticia', function(req, res){
        application.app.controllers.admin.form_add_noticia(application, req, res);
    });

    application.post('/noticia/salvar', function(req, res){
    	application.app.controllers.admin.noticia_salvar(application, req, res);
    });
};