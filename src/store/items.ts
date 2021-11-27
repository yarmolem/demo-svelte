import { writable } from 'svelte/store'

export interface Item {
  id: number
  text: string
  done: boolean
}

export const items = writable<Item[]>([])
