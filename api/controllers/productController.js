const connection = require('../mysql');
const get = ((req, res) => {
    connection.query('select name, price, description, img_url from brbmxtnkeafjco1nl4ox.products',(error, result) => {
        if (error)
        {
            res.status(500).send('Internal server error');
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = {get};