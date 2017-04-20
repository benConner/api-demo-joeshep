'use strict'

const { bookshelf } = require('../db/database');
require('./show');
require('./director');

const Show_Director = bookshelf.Model.extend({
  tableName: 'show_directors',
  directors: function (){return this.belongdTo('Director')},
  show: function(){ return this.belongdTo('Show')}
})

module.exports = bookshelf.model('Show_Director', Show_Director)
