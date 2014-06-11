var weapon = DS.Model.extend({
  weapontype:DS.belongsTo('weapontype'),

  attackDamage:DS.attr('number'),
  attackSpeed:DS.attr('number'),
  attackRange:DS.attr('number'),
  attackType:DS.attr('string'),
  
});

weapon.reopenClass({
  FIXTURES:[
    {
      id:1,
      
      attackDamge:50,
      attackSpeed:50,
      attackRange:50,
      attackType:'Slash',

      weapontype:1
      //image:'assets/portaits/Wizard.png'
    }
    ]
});

export default weapon;