module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiaModel = new application.app.models.NoticiaDAO(connection);

	noticiaModel.getUltimasNoticias(5, function(error, result){
		console.log(result);
		res.render("home/index", {noticias: result});	
	});
}