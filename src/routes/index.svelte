<script context="module">
  import ApolloClient, { gql } from "apollo-boost";
  import { LIVE } from "../data";

  let client;
  export async function preload() {
    client = new ApolloClient({
      uri:
        "https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql",
      headers: {
        "x-api-key": "da2-htijskntwzehlai3cbhmt7c24e"
      },
      fetch: this.fetch
    });

    return {
      cache: await client.query({ query: LIVE })
    };
  }
</script>

<script>
  import { getClient, restore, query } from "svelte-apollo";

  export let cache;
  restore(client, LIVE, cache.data);

  const live = query(client, { query: LIVE });
</script>

<style>
  main {
    text-align: center;
    background-color: #41563d;
    background-image: url("/bg.png");
    background-repeat: repeat;
    background-attachment: fixed;
    height: 100vh;
  }
  main,
  content {
    font-family: "Inter", sans-serif;
    margin: 0;
  }

  content {
    padding: 48px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: white;
    margin-bottom: 32px;
  }
  li {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 640px;
    max-width: calc(100% - 32px);
    font-size: 16px;
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 16px;
    place-items: center;
    background: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 500px) {
    li {
      padding: 24px 8px;
    }
  }
  team {
    width: 35%;
    text-align: center;
  }

  team-name {
    font-size: 14px;
    margin: 0;
  }

  team-logo {
    display: block;
    margin: 0 auto;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    background: #f2f2f2;
    border-radius: 32px;
  }

  goals {
    display: block;
    font-weight: 500;
    font-size: 32px;
    line-height: 64px;
    margin: 0 0 16px;
  }

  score {
    width: 30%;
    text-align: center;
  }

  status {
    display: block;
    font-size: 14px;
    color: #999;
  }
</style>

<main>
  <title>Svelte SSR Demo</title>
  <content>
    <h1>Live Results</h1>
    <ul>
      {#await $live}
        <li>Loading...</li>
      {:then result}
        {#each result.data.fixtures as fixture (fixture.fixture_id)}
          <li>
            <team>
              <team-logo />
              <team-name>{fixture.homeTeam}</team-name>
            </team>
            <score>
              <goals>{fixture.goalsHomeTeam} – {fixture.goalsAwayTeam}</goals>
              <status>{fixture.statusShort}</status>
            </score>
            <team>
              <team-logo />
              <team-name>{fixture.awayTeam}</team-name>
            </team>
          </li>
        {:else}
          <li>No games live</li>
        {/each}
      {:catch error}
        <li>Error loading games: {error}</li>
      {/await}
    </ul>
  </content>
</main>
