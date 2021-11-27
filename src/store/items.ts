import { writable } from 'svelte/store'

export interface Item {
  id: number
  text: string
  done: boolean
}

export const items = writable<Item[]>([])

export const addItem = (item: Item) => {
  items.update((state) => [...state, item])
}
export const updateItems = (item: Item) => {
  items.update((state) => state.map((i) => (i.id === item.id ? item : i)))
}
export const deleteItem = (id: number) => {
  items.update((state) => state.filter((i) => i.id !== id))
}
