
export default {
  title: 'Shows player virtual stats',
  baseCommand: '!ttm {username}',
  examples: [
    '!ttm Psikoi', 
    '!max Jakesterwars'
  ],
  alternatives : [
      {
          command: '!max {username}',
      },
  ]
};
