export default {
  title: 'Show player bosses',
  baseCommand: '!bosses {username}',
  options: [
    {
      flag: '--rank (or --ranks)',
      description: 'Shows ranks for every boss (instead of killcount)'
    }
  ],
  examples: ['!bosses Zezima', '!bosses Psikoi --ranks', '!bosses Cometz --rank']
};
