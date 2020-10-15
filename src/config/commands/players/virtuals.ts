
export default {
  title: 'Shows player virtual stats',
  baseCommand: '!virtuals {username}',
  examples: [
    '!virtuals Zezima', 
    '!ttm Psikoi', 
    '!ehp Cometz',
    '!ehb Jakesterwars',
  ],
  alternatives : [
      {
          command: '!ttm {username} / !ehp {username} / !ehb {username}',
      },
  ]
};
