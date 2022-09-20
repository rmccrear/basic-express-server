function logger(req, res, next) {
  console.log(`LOGGING: Path - ${req.path} Method - ${req.method}`);
  next();
}

module.exports = logger;
