function NoticiaDAO(connection){
	this._connection = connection;
}

NoticiaDAO.prototype.getNoticias = function(callback){	
	this._connection.query('select * from noticias order by id desc', callback);
};

NoticiaDAO.prototype.getNoticia = function(id, callback){
	this._connection.query('select * from noticias where id = '+id, callback);
};

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into noticias set ? ', noticia, callback);
};

NoticiaDAO.prototype.getUltimasNoticias = function(qtd, callback){
	this._connection.query('select * from noticias order by id desc limit '.concat(qtd), callback);
}

module.exports = function(){
	return NoticiaDAO;
};