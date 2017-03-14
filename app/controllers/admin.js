module.exports.form_add_noticia = function(application, req, res){
	res.render("admin/form-add-noticia", {validacao : {}, noticia : {}});
}

module.exports.noticia_salvar = function(application, req, res){
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data', 'Data é obrigatório').notEmpty().isDate({format : 'YYYY-MM-DD'});
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form-add-noticia', {validacao: erros, noticia : noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });
}