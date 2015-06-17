var $ = require('jquery');
var Backbone = require('backbone'); 
Backbone.$ = $; 

module.exports = Backbone.Model.extend({
    defaults: {
        id: null, 
        buyerId: null, 
        sellerId: null, 
        image: null, 
        title: null,
        description: null, 
        createdAt: null, 
        startingPrice: 0.01, 
        currentPrice: 0, 
        numBids: 0,
        startsAt: null, 
        endsAt: null
    }
});