<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      v-model="searchQuery"
      placeholder="Search by name"
      />

      <div
        v-if="filteredUsers.length > 0 && searchQuery"
        class="search-results">
        <nuxt-link
          :to="`/users/${user.id}`"
          class="search-results__item"
          v-for="user in filteredUsers"
          :key="user.id"
          @click="selectUser(user)"
          >
          {{ user.name }}
        </nuxt-link>
      </div>

  </div>
</template>

<script setup lang="ts">

  import { useUsersStore } from '~/stores/users';
  import { useSearchStore } from '~/stores/searchStore';
  import { ref, computed } from 'vue';

  const userStore = useUsersStore();
  const searchStore = useSearchStore();
  const searchQuery = ref('');

  const selectUser = (user: any) => {
    searchQuery.value = user.name;
    searchQuery.value = '';
    closeSearch();
  };

  const closeSearch = () => {
    searchStore.closeSearch();
  };

  onMounted(async () => {
    await userStore.fetchUsers()
  })

  const filteredUsers = computed(() => {
    return userStore.users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  });
</script>
