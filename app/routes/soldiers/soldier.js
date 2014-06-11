export default Ember.Route.extend({
  model: function(params){
    var temp = this.store.find('soldier',params.id);
    //console.log ('route: ',temp);
    return temp;
  }
});