export default {
  title: 'Configure (or disable) the preferred channel for a specific broadcast type',
  baseCommand: '!config channel:{type} {#channel}',
  requiresAdmin: true,
  examples: [
    '!config channel:competition-status here',
    '!config channel:member-name-changed none',
    '!config channel:member-hcim-died #general',
    '!config channel:member-achievements #achievements',
    '!config channel:members-list-changed #news'
  ]
};
