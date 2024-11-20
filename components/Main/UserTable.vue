<template>
  <table class="user-table">
    <thead class="user-table__header">
      <tr class="user-table__header-row">
        <th class="user-table__header-cell">Name</th>
        <th class="user-table__header-cell">Email</th>
        <th class="user-table__header-cell">Phone</th>
      </tr>
    </thead>
    <tbody class="user-table__body">
      <tr v-for="user in users" :key="user.id" class="user-table__body-row">
        <td class="user-table__body-cell">
          <nuxt-link
            :to="`/users/${user.id}`"
            class="user-table__link"
            >
              {{ user.name }}
          </nuxt-link>
        </td>
        <td class="user-table__body-cell">{{ user.email }}</td>
        <td class="user-table__body-cell">{{ user.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
  }

  interface Props {
    users: User[];
  }

  const props = defineProps<Props>();
</script>

