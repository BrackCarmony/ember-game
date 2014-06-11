
  export default Ember.ArrayController.extend({
  sortProperties: ['level'],
  sortAscending: false,
  newSoldierName:'',
  selectClass:1,
  classList: function() {
    return this.store.find('classes');
  }.property(),

  actions: {
    createSoldier: function(){
        //alert('Here');
        //console.log(this.get('classList')[this.get('selectClass')]);
        //console.log(this.store.find('classes', this.get('selectClass')));
        var newSoldier = this.store.createRecord('soldier' , {
            name: this.get('newSoldierName'),
            level: 1,
            xp:1,
            tier:1,
            classType: this.store.getById ('classes', this.get('selectClass'))
        });

        newSoldier.save();
        this.set('newSoldierName', "");
    }


  }
    
});
