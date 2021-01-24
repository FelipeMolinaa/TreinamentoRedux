class CarsController{

    index(req, res){
        return res.json({message: 'cars'})
    }

}

module.exports = new CarsController()