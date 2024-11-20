<template>
  <div v-if="user">
    <UserHeader :user="user" />
    <TodoList :todos="todos" />
  </div>

  <Preloader v-if="!user" />
</template>

<script setup lang="ts">

  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useUsersStore } from '~/stores/users';
  import UserHeader from '~/components/User/UserHeader.vue';
  import TodoList from '~/components/User/TodoList.vue';
  import Preloader from '~/components/Preloader.vue';

  const route = useRoute();
  const userId = Number(route.params.id);

  const user = ref(null);
  const todos = ref([]);

  onMounted(async () => {
    const userStore = useUsersStore();

    if (userStore.users.length === 0) {
      await userStore.fetchUsers();
    };

    user.value = userStore.users.find(u => u.id === userId);

    if (!user.value) {
      console.log('User not found');
      return;
    };

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      todos.value = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  });
</script>
