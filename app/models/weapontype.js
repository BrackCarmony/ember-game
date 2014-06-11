var weapontype = DS.Model.extend({
  weaponTypeName:DS.attr('string'),
  attackDamageMin:DS.attr('number'),
  attackSpeedMin:DS.attr('number'),
  attackRangeMin:DS.attr('number'),
  attackType:DS.attr('string'),
  attackDamageMax: function(){
    return this.get('attackDamgeMin')*4;
  }.property('attackDamgeMin'),
  attackSpeedMax: function(){
    return this.get('attackSpeedMin')*3;
  }.property('attackSpeedMin'),
  attackRangeMax: function(){
    return this.get('attackRangeMin')*2;
  }.property('attackRangeMin'),

  baseWeapon: function(){
    return {
      weapontype: this,
      attackDamage: this.get('attackDamageMin'),
      attackSpeed: this.get('attackSpeedMin'),
      attackRange: this.get('attackRangeMin'),
      attackType: this.get('attackType')
    };
  }.property('weapontype')
});

weapontype.reopenClass({
  FIXTURES:[
    {
      id:1,
      
      weaponTypeName:'Amulet',
      attackDamge:30,
      attackSpeed:40,
      attackRange:20,
      attackType:'Fire',
      
    },
    {
      id:2,
      
      weaponTypeName:'Orb',
      attackDamge:110,
      attackSpeed:20,
      attackRange:10,
      attackType:'Earth',
      
    },
    {
      id:3,
      
      weaponTypeName:'Staff',
      attackDamge:40,
      attackSpeed:20,
      attackRange:30,
      attackType:'Earth',
      
    },
    {
      id:4,
      
      weaponTypeName:'Wand',
      attackDamge:20,
      attackSpeed:40,
      attackRange:30,
      attackType:'Fire',
      
    },
    {
      id:5,
      
      weaponTypeName:'Claw',
      attackDamge:40,
      attackSpeed:70,
      attackRange:8,
      attackType:'Slash',
      
    },
    {
      id:6,
      
      weaponTypeName:'Cutlass',
      attackDamge:50,
      attackSpeed:50,
      attackRange:8,
      attackType:'Slash',
      
    },
    {
      id:7,
      
      weaponTypeName:'Lance',
      attackDamge:30,
      attackSpeed:40,
      attackRange:18,
      attackType:'Pierce',
      
    },
    {
      id:8,
      
      weaponTypeName:'Sword',
      attackDamge:50,
      attackSpeed:40,
      attackRange:10,
      attackType:'Slash',
      
    },
    {
      id:9,
      
      weaponTypeName:'Bow',
      attackDamge:30,
      attackSpeed:30,
      attackRange:30,
      attackType:'Pierce',
      
    },
    {
      id:10,
      
      weaponTypeName:'Javelin',
      attackDamge:40,
      attackSpeed:30,
      attackRange:20,
      attackType:'Piere',
      
    },
    {
      id:11,
      
      weaponTypeName:'Musket',
      attackDamge:30,
      attackSpeed:20,
      attackRange:35,
      attackType:'Pierce',
      
    },
    {
      id:12,
      
      weaponTypeName:'Shuriken',
      attackDamge:30,
      attackSpeed:60,
      attackRange:15,
      attackType:'Slash',
      
    }
  ]
});

export default weapontype;