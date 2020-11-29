export default {
  title: 'Show group records',
  baseCommand: '!group records {metric}',
  options: [
    {
      flag: '--6h / --day / --week / --month / --year',
      description: 'Defines the time period for the group records.'
    }
  ],
  examples: [
    '!group records cooking',
    '!group records vorkath --week',
    '!group records corporeal_beast --day'
  ]
};
