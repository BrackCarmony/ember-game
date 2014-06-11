var soldier = DS.Model.extend({
	name:DS.attr('string'),
	classType:DS.belongsTo('classes',{async:true}),
	level:DS.attr('number'),
  tier:DS.attr('number'),
  xp: DS.attr('number'),
  weapon:DS.belongsTo('weapon',{async:true}),
  getWeapon:function(){
    //return this.get('classType').get('defaultWeapon');
  }.property('classType'),
  maxLevel: function(){

    if(this.get('tier')*5>100){
      return 100;
    }else{
      return this.get('tier')*5;
    }
  }.property('tier'),
  scaleTrait: function(stat){
    var c = this.get('classType');
    console.log('c:', c);

    var promise = new Ember.RSVP.Promise (function (resolve, reject){
      c.then(function(){
          resolve (c.get(stat+'Growth'));
      });
    });

    //Math.round( this.get('level') *c.get(stat+'Growth')*Math.pow(1.05,this.get('tier'))/10);
    return promise;
  },
  maxHp: function(){
    //console.log('Blerg');
    return this.scaleTrait('maxHp');  
  }.property('level','tier', 'classType'),
  attack: function(){
    return this.scaleTrait('attack');
  }.property('level','tier','classType'),
  defense: function(){
    return this.scaleTrait('defense');
  }.property('level','tier','classType'),
  nextLevelXP: function(){
    if (this.get('level') < this.get('maxLevel')){
    var base = 100*Math.pow(1.05,this.get('tier')-1);
    return Math.round(base * (1+this.get('level'))*this.get('level')/2);  
    }else{
      return 'Max Level';
    }
  }.property('level','tier'),
  image: function(){
      return 'assets/portraits/'+this.get('classType').get('className')+'.png';
  }.property('classType')

    /*,
  maxHp: function(){
    var classModel = App.classModels[this.get("className")];
    return classModel["maxHpGrowth"]; //classModels.get("maxHpGrowth");
  }.property()*/
});

soldier.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:"Brack",
      classType:1,
      level:4,
      tier:1,
      xp:100,
      //image:'assets/portaits/Wizard.png'
    },
    {
      id:2,
      name:"Derek",
      classType:2,
      level:4,
      tier:2,
      xp:123,
      //image:'images/portraits/Wizard.png'
    },
    {
      id:3,
      name:"Justin",
      classType:3,
      level:4,
      tier:3,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:4,
      name:"Carter",
      classType:6,
      level:2,
      tier:7,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:5,
      name:"Brian",
      classType:9,
      level:5,
      tier:2,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:6,
      name:"Bryce",
      classType:7,
      level:7,
      tier:2,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:7,
      name:"Jeremy",
      classType:4,
      level:5,
      tier:5,
      xp:15,
      //image:'images/portraits/Warrior.png'
    }
    ]
});

export default soldier;