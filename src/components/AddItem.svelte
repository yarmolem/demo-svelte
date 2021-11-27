<script lang="ts">
  import { addItem } from '../store/items'

  let text = ''

  const handleSubmit = () => {
    addItem({ id: +new Date(), text, done: false })
    text = ''
  }
  

</script>

<main>
  <div class="search">
    <input type="text" placeholder="Agregar item" bind:value={text}>
    <button on:click={handleSubmit}>Agregar</button>
  </div>
</main>

<style>
  .search {
    display: flex;
    width: 100%;
  }

  .search input {
    margin-right: 0.5rem;
    width: 100%;
    outline: none;
    border-radius: 4px;
    color: #494F66;
    padding: 0.5rem 1rem;
    border: 1px solid #C5CBE0;

    transition: border 0.3s ease-in-out;
  }

  .search input:focus {
    border: 1px solid #ff3e00;
  }

  .search button {
    font-weight: 700;
    cursor: pointer;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    background-color: #ff3e00;

    transition: background-color 0.3s ease-in-out;
  }

  .search button:hover {
    background-color: #e43c04;
  }
</style>
