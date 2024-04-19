import { Links } from "./Links";

export interface Participant {
  fundraisingGoal:     number;
  links:               Links;
  isTeamCoCaptain:     boolean;
  teamName:            string;
  numIncentives:       number;
  displayName:         string;
  sumDonations:        number;
  eventID:             number;
  numMilestones:       number;
  avatarImageURL:      string;
  teamID:              number;
  isTeamCaptain:       boolean;
  sumPledges:          number;
  numDonations:        number;
}
