<script lang="ts">
  import Item from './Item.svelte'
  import { items } from '../store/items'
  

</script>

<ul>
  {#each $items as item }
    <Item {item} />
  {/each}
</ul>

<style>

  ul {
    gap: 1rem;
    padding: 0;
    display: flex;
    text-align: left;
    list-style: none;
    flex-direction: column;
  }

</style>
