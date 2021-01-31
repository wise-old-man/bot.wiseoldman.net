export default {
  title: 'Show player gains',
  baseCommand: '!gained {username}',
  options: [
    {
      flag: '--6h / --day / --week / --month / --year / --2w6d5h (see examples)',
      description: 'Defines the time period for the player gains.'
    }
  ],
  examples: [
    '!gained Zezima',
    '!gained Psikoi --month',
    '!gained Cometz --day',
    '!gained Lynx Titan --1y5m2h',
    '!gained Iron Mammal --6m2w5h'
  ]
};
