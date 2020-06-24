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
    }
  ],
  examples: [
    '!stats Zezima',
    '!stats Lynx Titan --exp',
    '!stats Psikoi --xp',
    '!stats Iron Mammal --ranks',
    '!stats Cometz --rank'
  ]
};
