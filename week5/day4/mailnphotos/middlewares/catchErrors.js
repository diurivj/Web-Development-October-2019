// exportamos la funcion de manejo de errores que recibe un controller
module.exports = function(controller) {
  //devolvemos un middleware
  return function(req, res, next) {
    // Cuando en un cb vas a mandar el dato que recibes como parametro a una función basta con colocar la función en vez del cb completo
    //                          👇🏻 Esto es equivalente a catch(err => next(err))
    return controller(req, res).catch(next);
  };
};

exports.catchErrorsHipster = controller => (req, res, next) =>
  controller(req, res).catch(next);
