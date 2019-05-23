import { gql } from 'apollo-boost';

export const LIVE = gql`
query live {
  fixtures: live {
    fixture_id
    league_id
    homeTeam
    awayTeam
    statusShort
    goalsHomeTeam
    goalsAwayTeam
    halftime_score
    final_score
    penalty
  }
}
`;
