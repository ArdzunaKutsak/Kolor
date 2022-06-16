const { Lips } = require('../models/models')

class LipsController {
    async create(req, res) {
        try {
            const {link} = req.body;
            const lips = await Lips.create({link})
            return res.json(lips)
        } catch (e) {
            console.log(e)
        }
    }    
    async getAll(req,res) {
        const lips = await Lips.findAll()
        return res.json(lips)
    }
    async delete(req,res) {
        const { id } = req.params;
        await Lips.destroy({
            where: {id},     
        })    
    }
}

module.exports = new LipsController()