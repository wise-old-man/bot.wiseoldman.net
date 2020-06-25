import configChannel from './configs/channel';
import configGroup from './configs/group';
import configPrefix from './configs/prefix';
import groupCompetition from './groups/competition';
import groupCompetitions from './groups/competitions';
import groupDetails from './groups/details';
import groupGained from './groups/gained';
import groupHiscores from './groups/hiscores';
import groupMembers from './groups/members';
import groupRecords from './groups/records';
import playerAchievements from './players/achievements';
import playerActivities from './players/activities';
import playerBosses from './players/bosses';
import playerGained from './players/gained';
import playerStats from './players/stats';
import playerUpdate from './players/update';

export default [
  playerStats,
  playerBosses,
  playerActivities,
  playerAchievements,
  playerGained,
  playerUpdate,
  groupDetails,
  groupCompetition,
  groupCompetitions,
  groupHiscores,
  groupGained,
  groupRecords,
  groupMembers,
  configGroup,
  configChannel,
  configPrefix
];
