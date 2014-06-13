var weapon = DS.Model.extend({
  weapontype:DS.belongsTo('weapontype'),
  weaponTypeName:function (){
    return this.get('weapontype.weaponTypeName');
  }.property('weapontype.weaponTypeName'),
  attackDamage:DS.attr('number'),
  attackSpeed:DS.attr('number'),
  attackRange:DS.attr('number'),
  attackType:function (){
    return this.get('weapontype.AttackType');
  }.property('weapontype.AttackType'),
  damageIcon:function(){
    return 'assets/icons/' + this.get('weapontype.attackType') + '.png';
  }.property('weapontype.attackType')
  
});

weapon.reopenClass({
  FIXTURES:[
    {
      id:1,
      
      attackDamage:50,
      attackSpeed:50,
      attackRange:50,
      attackType:'Slash',

      weapontype:1
    }
    ]
});

export default weapon;