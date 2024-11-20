<template>
  <Header :title="pageTitle" />
  <main>
    <SearchBar v-if="isSearchOpen"/>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import SearchBar from '@/components/Main/SearchBar.vue';

  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { useSearchStore } from '~/stores/searchStore';

  const route = useRoute();
  const searchStore = useSearchStore();
  const isSearchOpen = computed(() => searchStore.isSearchOpen);

  const pageTitle = computed(() => {
    const path = route.path;
    if (path === '/') {
      return 'Users List';
    } else if (path.startsWith('/users/')) {
      return `User's To-Do List`;
    }
  });
</script>

