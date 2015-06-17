var Backbone = require('backbone');
Backbone.$ = require('jquery');
var CategoryModel = require('../models/CategoryModel.js');

module.exports = Backbone.Collection.extend({
    model: CategoryModel
});