var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('soldiers',function(){
    this.route('soldier', {'path': '/:id'});
    this.route('new', {'path': '/New_Unit'});
  });
	this.resource('buildings');
	this.resource('battles');
  this.resource('classes');
  this.resource('items');
});

export default Router;
