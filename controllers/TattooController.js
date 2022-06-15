const { Tattoo } = require('../models/models')

class TattooController {
    async create(req, res) {
        try {
            const {link} = req.body;
            const tattoo = await Tattoo.create({link})
            return res.json(tattoo)
        } catch (e) {
            console.log(e)
        }
    }    
    async getAll(req,res) {
        const tattoos = await Tattoo.findAll()
        return res.json(tattoos)
    }
}

module.exports = new TattooController()