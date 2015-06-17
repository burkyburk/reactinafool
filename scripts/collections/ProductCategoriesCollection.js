var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ProductCategoriesModel = require('../models/ProductCategoriesModel.js');

module.exports = Backbone.Collection.extend({
    model: ProductCategoriesModel
});