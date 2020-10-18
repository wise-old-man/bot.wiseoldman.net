
export default {
  title: 'Shows player efficiency stats',
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
