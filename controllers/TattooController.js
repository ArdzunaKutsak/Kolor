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
    async delete(req,res) {
        const { id } = req.params;
        await Tattoo.destroy({
            where: {id},     
        })    
    }
}

module.exports = new TattooController()