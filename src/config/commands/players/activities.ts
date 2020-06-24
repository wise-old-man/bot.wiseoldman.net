export default {
  title: 'Show player activities',
  baseCommand: '!activities {username}',
  options: [
    {
      flag: '--rank (or --ranks)',
      description: 'Shows ranks for every boss (instead of killcount)'
    }
  ],
  examples: ['!activities Zezima', '!activities Psikoi --ranks', '!activities Cometz --rank']
};
