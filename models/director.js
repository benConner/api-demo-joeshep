'use strict'

const { bookshelf } = require('../db/database');
require('./show');
require('./show_director');

const Director = bookshelf.Model.extend({
  tableName: 'directors',
  shows: function() {return this.belongdToMany('Show').through('Show_Directors')}
})

module.exports = bookshelf.model('Director', Director);
