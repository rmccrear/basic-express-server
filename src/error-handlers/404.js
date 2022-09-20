// handle missing routes
function errorHandler404(req, res, next) {
  res.status(404).send("Your route could not be found.");
}

module.exports = errorHandler404;
