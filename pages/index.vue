<template>
  <UsersTable :users="paginatedUsers" />

  <Pagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    @update:page="setPage"
  />

  <Preloader v-if="isLoading" />
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue';
  import { useUsersStore } from '~/stores/users';
  import { useRoute, useRouter } from 'vue-router';
  import UsersTable from '@/components/Main/UserTable.vue';
  import Pagination from '@/components/Main/Pagination.vue';
  import Preloader from '@/components/Preloader.vue';

  const userStore = useUsersStore();

  const route = useRoute();
  const router = useRouter();

  const currentPage = ref(Number(route.query.page) || 1);
  const perPage = 5;

  const isLoading = ref(true);

  const totalPages = computed(() => Math.ceil(userStore.users.length / perPage));

  const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return userStore.users.slice(start, end);
  });

  watch(() => route.query.page, (newPage) => {
    currentPage.value = Number(newPage) || 1;
  });

  onMounted(async () => {
    isLoading.value = true;
    await userStore.fetchUsers();
    isLoading.value = false;
  });

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      router.push({ query: { page: currentPage.value } });
    }
  };
</script>
