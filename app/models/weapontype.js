var weapontype = DS.Model.extend({
  weaponTypeName:DS.attr('string'),
  attackDamageMin:DS.attr('number'),
  attackSpeedMin:DS.attr('number'),
  attackRangeMin:DS.attr('number'),
  attackType:DS.attr('string'),
  attackDamageMax: function(){
    return this.get('attackDamageMin')*4;
  }.property('attackDamageMin'),
  attackSpeedMax: function(){
    return this.get('attackSpeedMin')*3;
  }.property('attackSpeedMin'),
  attackRangeMax: function(){
    return this.get('attackRangeMin')*2;
  }.property('attackRangeMin'),

  defaultWeapon: function(){
    return {
      weaponTypeName: this.get('weaponTypeName'),
      attackDamage: this.get('attackDamageMin'),
      attackSpeed: this.get('attackSpeedMin'),
      attackRange: this.get('attackRangeMin'),
      attackType: this.get('attackType'),
      damageIcon: 'assets/icons/' + this.get('attackType') + '.png'
    };
  }.property('weaponTypeName')
});

weapontype.reopenClass({
  FIXTURES:[
    {
      id:1,
      
      weaponTypeName:'Amulet',
      attackDamageMin:30,
      attackSpeedMin:40,
      attackRangeMin:20,
      attackType:'Fire',
      
    },
    {
      id:2,
      
      weaponTypeName:'Orb',
      attackDamageMin:110,
      attackSpeedMin:20,
      attackRangeMin:10,
      attackType:'Earth',
      
    },
    {
      id:3,
      
      weaponTypeName:'Staff',
      attackDamageMin:40,
      attackSpeedMin:20,
      attackRangeMin:30,
      attackType:'Earth',
      
    },
    {
      id:4,
      
      weaponTypeName:'Wand',
      attackDamageMin:20,
      attackSpeedMin:40,
      attackRangeMin:30,
      attackType:'Fire',
      
    },
    {
      id:5,
      
      weaponTypeName:'Claw',
      attackDamageMin:40,
      attackSpeedMin:70,
      attackRangeMin:8,
      attackType:'Earth',
      
    },
    {
      id:6,
      
      weaponTypeName:'Cutlass',
      attackDamageMin:50,
      attackSpeedMin:50,
      attackRangeMin:8,
      attackType:'Slash',
      
    },
    {
      id:7,
      
      weaponTypeName:'Lance',
      attackDamageMin:30,
      attackSpeedMin:40,
      attackRangeMin:18,
      attackType:'Pierce',
      
    },
    {
      id:8,
      
      weaponTypeName:'Sword',
      attackDamageMin:50,
      attackSpeedMin:40,
      attackRangeMin:10,
      attackType:'Slash',
      
    },
    {
      id:9,
      
      weaponTypeName:'Bow',
      attackDamageMin:30,
      attackSpeedMin:30,
      attackRangeMin:30,
      attackType:'Pierce',
      
    },
    {
      id:10,
      
      weaponTypeName:'Javelin',
      attackDamageMin:40,
      attackSpeedMin:30,
      attackRangeMin:20,
      attackType:'Piere',
      
    },
    {
      id:11,
      
      weaponTypeName:'Musket',
      attackDamageMin:30,
      attackSpeedMin:20,
      attackRangeMin:35,
      attackType:'Fire',
      
    },
    {
      id:12,
      
      weaponTypeName:'Shuriken',
      attackDamageMin:30,
      attackSpeedMin:60,
      attackRangeMin:15,
      attackType:'Slash',
      
    }
  ]
});

export default weapontype;