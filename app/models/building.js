var building = DS.Model.extend({
  name:DS.attr('string'),
  level:DS.attr('number'),
  slots:DS.attr('number')

});

building.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:"Blacksmith",
      level:1,
      slots:1
    },
    {
      id:2,
      name:"Armorer",
      level:2,
      slots:2
    },
    {
      id:3,
      name:"Mage's Tower",
      level:3,
      slots:6
    }
    ]
});

export default building;