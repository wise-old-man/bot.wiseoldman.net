export default {
  title: 'Show player bosses',
  baseCommand: '!bosses {username}',
  options: [
    {
      flag: '--rank (or --ranks)',
      description: 'Shows ranks for every boss (instead of killcount)'
    },
    {
      flag: '--ehb (or --hours)',
      description: 'Shows EHB for every boss (instead of killcount)'
    }
  ],
  examples: [
    '!bosses Zezima',
    '!bosses Psikoi --ranks',
    '!bosses Cometz --rank',
    '!bosses Jakesterwars --ehb',
    '!bosses Hey Jase --hours'
  ],
  alternatives: [
    {
      command: '!ehb {username}',
      description: 'Alternative to !bosses {username} --ehb'
    }
  ]
};
