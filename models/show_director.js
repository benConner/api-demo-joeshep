'use strict'

const { bookshelf } = require('../db/database');
require('./show');
require('./show_director');

const Show_Directors = bookshelf.Model.extends({
  tableName: 'show_directors',
  directors: function (){return this.belongdTo('Director')},
  show: function(){ return this.belongdTo('Show')}
})

module.exports = bookshelf.model('Show_Directors', Show_Directors)
