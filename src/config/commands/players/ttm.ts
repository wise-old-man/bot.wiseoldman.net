
export default {
  title: 'Shows player virtual stats',
  baseCommand: '!ttm {username}',
  examples: [
    '!virtuals Zezima', 
    '!ttm Psikoi', 
    '!ehp Cometz',
    '!ehb Jakesterwars',
  ],
  alternatives : [
      {
          command: '!max {username}',
      },
  ]
};
