export default {
  title: 'Show group ongoing/upcoming competition',
  baseCommand: '!group competition',
  options: [
    {
      flag: '--ongoing / --upcoming',
      description: 'Toggles between showing an ongoing or upcoming competition.'
    }
  ],
  examples: ['!group competition', '!group competition --ongoing', '!group competition --upcoming']
};
