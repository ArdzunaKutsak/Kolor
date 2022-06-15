const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Opinion = sequelize.define('Opinion', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull:false},
    text: {type: DataTypes.STRING, allowNull:false},
    picture: {type: DataTypes.STRING, allowNull:false},
})
const Tattoo = sequelize.define('Tattoo', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    link: {type: DataTypes.STRING, allowNull:false},
})
const Permanent = sequelize.define('Permanent', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    link: {type: DataTypes.STRING, allowNull:false},
})
const Lips = sequelize.define('Lips', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    link: {type: DataTypes.STRING, allowNull:false},
})

module.exports = { Opinion, Tattoo, Permanent, Lips }