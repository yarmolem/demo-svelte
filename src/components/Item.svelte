<script lang="ts">
  import type { Item } from '../store/items'
  import { updateItems, deleteItem } from '../store/items'

  export let item: Item

</script>

<li>
  <input
    type="checkbox"
    checked={item.done}
    on:input={e => updateItems({ ...item, done: e.currentTarget.checked })}
  >
  <h3 class:line={item.done}>{item.text}</h3>
  <button on:click={() => deleteItem(item.id)}>Eliminar</button>
</li>

<style>

  li {
    gap: 1rem;
    display: flex;
    align-items: center;
  }

  h3 {
    width: 100%;
    margin: 0;
    padding: 0;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.1;
  }

  .line {
    font-style: italic;
    text-decoration: line-through;
  }

  button {
    font-weight: 700;
    cursor: pointer;
    outline: none;
    color: #ff3e00;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid #ff3e00;

    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #fcccbd;
  }

</style>
