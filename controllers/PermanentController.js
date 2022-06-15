const { Permanent } = require('../models/models')

class PermanentController {
    async create(req, res) {
        try {
            const {link} = req.body;
            const permanent = await Permanent.create({link})
            return res.json(permanent)
        } catch (e) {
            console.log(e)
        }
    }    
    async getAll(req,res) {
        const permanents = await Permanent.findAll()
        return res.json(permanents)
    }
}

module.exports = new PermanentController()