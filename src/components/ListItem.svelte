<script lang="ts">
  import Item from './Item.svelte'
  import { items, Item as ItemType } from '../store/items'

  const handleUpdate = (item: ItemType) => {
    items.update((prevState) => prevState.map((i) => i.id === item.id ? item : i))
  }
  
  const handleDelete = (id: number) => {
    items.update((prevState) => prevState.filter((i) => i.id !== id ))
  }
  

</script>

<ul>
  {#each $items as item }
    <Item
      {item}
      onEdit={handleUpdate}
      onDelete={handleDelete}
    />
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
