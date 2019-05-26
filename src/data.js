import { gql } from 'apollo-boost';

export const LIVE = gql`
query live {
  fixtures: live {
    fixture_id
      league_id
      league {
        logo
      }
      homeTeam {
        team_id
        team_name
        logo
      }
      awayTeam {
        team_id
        team_name
        logo
      }
      statusShort
      goalsHomeTeam
      goalsAwayTeam
  }
}
`;

export const FIXTURES = gql`
query fixtures($date: String!) {
  fixtures(date: $date) {
    fixture_id
      league_id
      league {
        logo
      }
      homeTeam {
        team_id
        team_name
        logo
      }
      awayTeam {
        team_id
        team_name
        logo
      }
      statusShort
      goalsHomeTeam
      goalsAwayTeam
  }
}
`;
