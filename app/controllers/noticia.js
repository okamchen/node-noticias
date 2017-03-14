module.exports.noticias = function(application, req, res){

	var connection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
   	});
}

module.exports.noticia = function(application, req, res){
	var connection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiaDAO(connection);
    var id_noticia = req.query.id_noticia;

    noticiaDAO.getNoticia(id_noticia, function(error, result){
        res.render("noticias/noticia", {noticia : result});
    });
}