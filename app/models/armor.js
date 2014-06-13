var armor = DS.Model.extend({
  armorType: DS.attr('string'),
  slashResistance: DS.attr('number'),
  pierceResistance: DS.attr('number'),
  fireResistance: DS.attr('number'),
  earthResistance: DS.attr('number')
});

armor.reopenClass({
  FIXTURES:[
    {
      id: 1,
      armorType: 'Heavy',
      slashResistance: 50,
      pierceResistance: 25,
      fireResistance: 10,
      earthResistance: 0
    },
    {
      id: 2,
      armorType: 'Heavy',
      slashResistance: 25,
      pierceResistance: 50,
      fireResistance: 0,
      earthResistance: 10
    },
    {
      id: 3,
      armorType: 'Medium',
      slashResistance: 20,
      pierceResistance: 20,
      fireResistance: 20,
      earthResistance: 0
    },
    {
      id: 4,
      armorType: 'Light',
      slashResistance: 0,
      pierceResistance: 10,
      fireResistance: 25,
      earthResistance: 50
    }

    ]
});

export default armor;