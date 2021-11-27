<script lang="ts">
  import AddItem from './components/AddItem.svelte'
  import ListItem from './components/ListItem.svelte'
</script>

<main>
  <h1>DEMO - SVELTE</h1>

  <AddItem />
  <ListItem />
</main>

<style>

  main {
    padding: 1em;
    margin: 0 auto;
    max-width: 450px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
