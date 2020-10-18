export default {
  title: 'Show player stats (skilling)',
  baseCommand: '!stats {username}',
  options: [
    {
      flag: '--exp (or --xp)',
      description: 'Shows experience for every skill (instead of levels)'
    },
    {
      flag: '--rank (or --ranks)',
      description: 'Shows ranks for every skill (instead of levels)'
    },
    {
      flag: '--ehp (or --hours)',
      description: 'Shows EHP for every skill (instead of levels)'
    }
  ],
  examples: [
    '!stats Zezima',
    '!stats Lynx Titan --exp',
    '!stats Psikoi --xp',
    '!stats Iron Mammal --ranks',
    '!stats Cometz --rank',
    '!stats Jakesterwars --ehp',
    '!stats Mmorpg --hours',
    '!ehp USBC'
  ],
  alternatives: [
    {
      command: '!ehp {username}',
      description: 'Alternative to !stats {username} --ehp'
    }
  ]
};
