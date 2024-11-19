import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
  email: string
  phone: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
  }),

  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Failed users')
        }
        this.users = await response.json()
      } catch (error) {
        console.error('Error:', error)
      }
    },
  },
})
