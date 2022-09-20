

function handleError505(err, req, res, next){
    console.log("Error: 505", err);
    res.status(500).send(err);
}

module.exports = handleError505;
