export default {
  title: 'Show group gains',
  baseCommand: '!group gained {metric}',
  options: [
    {
      flag: '--6h / --day / --week / --month / --year',
      description: 'Defines the time period for the group gains.'
    }
  ],
  examples: [
    '!group gained cooking',
    '!group gained vorkath --week',
    '!group gained corporeal_beast --day'
  ]
};
