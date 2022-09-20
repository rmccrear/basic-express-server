function validation(req, res, next) {
  const name = req.query.name;
  if (name !== undefined) {
    next();
  } else {
    next("Error: Name not found. Please suply a name.");
  }
}

module.exports = validation;
