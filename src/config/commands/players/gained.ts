export default {
  title: 'Show player gains',
  baseCommand: '!gained {username}',
  options: [
    {
      flag: '--6h / --day / --week / --month / --year',
      description: 'Defines the time period for the player gains.'
    }
  ],
  examples: ['!gained Zezima', '!gained Psikoi --month', '!gained Cometz --day']
};
