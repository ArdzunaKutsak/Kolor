const uuid = require('uuid')
const path = require('path')
const { Opinion } = require('../models/models')

class OpinionController {
    async create(req, res) {
        try {
            const { name, text} = req.body;
            const { picture } = req.files;
            let fileName = uuid.v4() + ".jpg"
            picture.mv(path.resolve(__dirname, '..', 'static', fileName))
            const opinion = await Opinion.create({name, text, picture: fileName })
            return res.json(opinion)
        } catch (e) {
            console.log(e)
        }
    }    
    async getAll(req,res) {
        const opinions = await Opinion.findAll()
        return res.json(opinions)
    }
    async delete(req,res) {
        const { id } = req.params;
        await Opinion.destroy({
            where: {id},     
        }, )  
        
    }
}

module.exports = new OpinionController()