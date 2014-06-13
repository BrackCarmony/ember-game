var classes = DS.Model.extend({
  className:DS.attr('string'),
  maxHpGrowth:DS.attr('number'),
  attackGrowth:DS.attr('number'),
  defenseGrowth:DS.attr('number'),
  defaultWeaponType:DS.belongsTo('weapontype',{async: true}),
  soldiers:DS.hasMany('soldier'),

  defaultWeapon:function(){
    return this.get('defaultWeaponType').get('defaultWeapon');
  }.property('defaultWeaponType.@each')
  //soldiers:DS.hasMany('soldier')
});

classes.reopenClass({
  FIXTURES:[
  {
    id:1,
    className:"Wizard",
    maxHpGrowth:30,
    attackGrowth:40 ,
    defenseGrowth:10,
    defaultWeaponType:4,
    soldiers:[1]
  },
  {
    id:2,
    className:"Monk",
    maxHpGrowth:30,
    attackGrowth:20,
    defenseGrowth:30,
    defaultWeaponType:5,
    soldiers:[2]
  },
  {
    id:3,
    className:"Warrior",
    maxHpGrowth:30,
    attackGrowth:10 ,
    defenseGrowth:40,
    defaultWeaponType:8,
    soldiers:[3]
  },
  {
    id:4,
    className:"Archer",
    maxHpGrowth:10,
    attackGrowth:30 ,
    defenseGrowth:40,
    defaultWeaponType:9,
    soldiers:[7]
  },
  {
    id:5,
    className:"Knight",
    maxHpGrowth:40,
    attackGrowth:10 ,
    defenseGrowth:30,
    defaultWeaponType:7,
    soldiers:[]
  },
  {
    id:6,
    className:"Pirate",
    maxHpGrowth:20,
    attackGrowth:40 ,
    defenseGrowth:20,
    defaultWeaponType:6,
    soldiers:[4]
  },
  {
    id:7,
    className:"Priest",
    maxHpGrowth:40,
    attackGrowth:30 ,
    defenseGrowth:10,
    defaultWeaponType:1,
    soldiers:[6]
  },
  {
    id:8,
    className:"Witch",
    maxHpGrowth:10,
    attackGrowth:40 ,
    defenseGrowth:30,
    defaultWeaponType:2,
    soldiers:[]
  },
  {
    id:9,
    className:"Ninja",
    maxHpGrowth:20,
    attackGrowth:40 ,
    defenseGrowth:20,
    defaultWeaponType:12,
    soldiers:[5]
  },
  {
    id:10,
    className:"Druid",
    maxHpGrowth:20,
    attackGrowth:20 ,
    defenseGrowth:40,
    defaultWeaponType:3,
    soldiers:[]
  },
  {
    id:11,
    className:"Javelinier",
    maxHpGrowth:40,
    attackGrowth:20 ,
    defenseGrowth:20,
    defaultWeaponType:9,
    soldiers:[]
  },
  {
    id:12,
    className:"Musketeer",
    maxHpGrowth:20,
    attackGrowth:30 ,
    defenseGrowth:30,
    defaultWeaponType:11,
    soldiers:[]
  }

  ]
});

export default classes;